const axios = require("axios")
const url = "https://maps.googleapis.com/maps/api/geocode/json?";
const data =  {
	address: 'DECATUR AVENUE and EAST 193 STREET',
   key : 'AIzaSyDD7e-AVNApqktqxpYf5DlON8WTV48exm4'
}

axios.get(url, {
 	params : data
})
.then(function (response) {
  console.log(response.data.results[0].geometry.location);
})
.catch(function (error) {
   console.log(error);
 });