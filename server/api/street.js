const router = require('express').Router();
const util = require('util');
const User = require('../models/user');
const isAuthenticated = require('../middlewares/isAuthenticated');
const jwt = require('jsonwebtoken');
const Street = require('../models/streetParking');

module.exports = function (app) {


	//given a an intersection : {main_st: , other_st}
	//return an array [{streetID: , street_adress: }]
	//street_adress format : from <main_st> & <from_st> to <main_St> & <to_st> <sos> side 

	//router.use(isAuthenticated(app));


	router.post('/getAvailableParking', (req,res) => {
		Street.getAvailableParking(req.body)
		.then(spots => {
			res.json({success:true, data: spots})
		})
		.catch(error => {
			res.json({success: false, message: "there was an error getting data for this location"})
		})

	});

	//returns an array of close by locations to a street to populate google map
	router.post('/getHeatMapData',(req,res) => {
		let radius = req.body.radius;
		let streetName = req.body.streetName;
		//console.log('streetName' + streetName);
		//console.log('body: ' + util.inspect(req.body, false, null));
		Street.getHeatMapData(streetName,radius)
		.then(streets => {
			//console.log(streets);
			//let data = streets.map(street =>({streetId: street._id, location : street.address.location}));
			res.json({success:true, data: streets});
			
		} )
		.catch(error => {
			res.json({success: false, message: "there was an error getting data for this location"});

		});
	});

	return router;
}

