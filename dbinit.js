const csv=require('csvtojson');
const csvFilePath='./testlocations.csv';
const mongoose = require('mongoose');
const config = require('./server/config');
const axios = require("axios");
const Streets = require('./server/models/streetParking');

const GEOCODE_URL = "https://maps.googleapis.com/maps/api/geocode/json?";
const API_KEY = 'AIzaSyDD7e-AVNApqktqxpYf5DlON8WTV48exm4';

//connect to database
mongoose.connect(process.env.MONGODB_URI || config.database);
mongoose.Promise = global.Promise;

//returns a promise
const getGeoCode = (mainStreet, otherStreet) => {
	let data = {
		address: mainStreet + ' and ' + otherStreet,
   	key : API_KEY
	};

	return axios.get(GEOCODE_URL, {	params : data })
		.then( (response) => {
		  console.log(response.data);
		  return response.data.results[0].geometry.location;
		});	
}

csv()
.fromFile(csvFilePath)
.on('json',(jsonObj) => {
	//
	let full_address = jsonObj;

	// then get the start and end coordinates from google geocode api
	getGeoCode(jsonObj.main_st, jsonObj.from_st)
  .then(start_cord => {
		 let location = {start_cord : start_cord}
		 return getGeoCode(jsonObj.main_st,jsonObj.to_st)
		 	.then(end_cord => {
		 		location.end_cord = end_cord;
		 		return location;
		 	})
	})
	.then (location => {
		//console.log(location);
		return Streets.createStreet( {location : location, full_address : full_address});
		
	})
	.then(resp => {
		console.log(resp);
	})
	.catch(error => {
		console.log(error);
	})
	

	//Streets.createStreet()
	//console.log(jsonObj);

})
.on('done', (error) => {
	if (error) {
		console.log(error);
	}
	console.log('done')
})