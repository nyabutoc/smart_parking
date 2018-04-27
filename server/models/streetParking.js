const mongoose = require('mongoose');
const geolib = require('geolib');
const Schema = mongoose.Schema;
const CAR_SIZE = 4.8; //length of car in meters

const streetParkingSchema = new Schema({
	capacity : {
		type: Number,
		required: true
	},
  address : {
    full_address: {
      boro : String,
      main_st: String,
      from_st: String,
      to_st: String,
      sos : String
    },
    location : {
      start_cord : {
        lng : Number,
        lat : Number
      },
      end_cord : {
        lng : Number,
        lat : Number
      }
    }
  }
}, {
  timestamps: { createdAt: 'created_at' },
});

//converts degrees to radians
const toRad = function toRad (Value) {
  return Value * Math.PI / 180;
}

const getCapacity = function(start_cord, end_cord) {
  let R = 6371; // km
  let dLat = toRad(end_cord.lat - start_cord.lat);
  let dLon = toRad(end_cord.lng - start_cord.lng);
  let lat1 = toRad(start_cord.lat);
  let lat2 = toRad(end_cord.lat);
  //console.log("dLat : " + dLat);
  //console.log("dLon : " + dLon);

  let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 

  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  let d = R * c * 1000; // length of the street in meters
  //console.log("d : " + d);
  return parseInt(d / CAR_SIZE); //returns the capacity in terms of number of cars

}




streetParkingSchema.statics.createStreet = function (address)  {
  //do the capacity calculation
  //set car_count to zero
  //return a promise for saving to database
  let capacity = getCapacity(address.location.start_cord, address.location.end_cord);
  //console.log("capacity : " + capacity);
  let newStreet = new this({
    capacity: capacity,
    address: address,
  });

  return newStreet.save();
} 

//create the array given the query results [{location : {lat, lon} weight : }]
// 
//

const streetToHeatMap = (streetData) => {
  let start_cord_data = streetData.map((street) => (
    { 
      location: {lat: street.address.location.start_cord.lat, lon: street.address.location.start_cord.lng},
      weight : street.capacity === 0 ? 0 : 50000/street.capacity //weight is inverse of capacity in the future have actual user points
    })
  );
  let end_cord_data = streetData.map((street) => (
    { 
      location: {lat: street.address.location.end_cord.lat, lon: street.address.location.end_cord.lng},
      weight : street.capacity === 0 ? 0 : 50000/street.capacity //weight is inverse of capacity in the future have actual user points
    })
  );
  return start_cord_data.concat(end_cord_data);

}


  //given an intersection give an array [{streetID: , street_adress: }]
  //street_adress format : from <main_st> & <from_st> to <main_St> & <to_st> <sos> side 
  //takes in an intersection : {main_st, other_St} 
  //returns a promise
const streetToAvailableParking = (streetData) => (
  streetData.map((street) => ({
    streetID: street._id, 
    street_adress: street.address.full_address.sos + ' side of ' + street.address.full_address.main_st + ' between ' + street.address.full_address.from_st + ' and ' + street.address.full_address.to_st})))



streetParkingSchema.statics.getAvailableParking = function(intersection) {
  //check if main_st =. main_st and other_st = to_st or other_st = from_st.
  return this.find({
    capacity: {"$gt" : 0},
    "$or": [
      { "address.full_address.main_st" : intersection.main_st , "address.full_address.from_st" : intersection.other_st},
      {"address.full_address.main_st" : intersection.main_st, "address.full_address.to_st" : intersection.other_st }
    ]})
    .then((streetData) => (streetToAvailableParking(streetData)));
}

//initialy just give close streets of streets in the database, later might call API
//do a linear calculation to put cars on a straight line on the street
streetParkingSchema.statics.getHeatMapData = function (streetName,radius) {
  return this.findOne({"address.full_address.main_st": streetName})
    .then(res => {
      console.log("res :" + res);
      if (!res) {
        return {};
      }
      let input = {lat: res.address.location.start_cord.lat, lon : res.address.location.start_cord.lng}
      let northbound_lat = geolib.computeDestinationPoint(input, radius, 0).latitude;
      let southbound_lat = geolib.computeDestinationPoint(input, radius, 180).latitude;
      let eastbound_lng = geolib.computeDestinationPoint(input, radius, 90).longitude;
      let westbound_lng = geolib.computeDestinationPoint(input, radius, -90).longitude;

      console.log(input);
      console.log(northbound_lat);
      console.log(southbound_lat);
      console.log(eastbound_lng);
      console.log(westbound_lng);

      return this.find( { "address.location.start_cord.lat" : {"$lt" : northbound_lat, "$gt" : southbound_lat},
                        "address.location.start_cord.lng" :{"$lt" : eastbound_lng, "$gt" : westbound_lng} })
                  .then((streetData) => streetToHeatMap(streetData));


    })   
}

//add some other querries


module.exports = mongoose.model('Street', streetParkingSchema);