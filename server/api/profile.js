const router = require('express').Router();
const isAuthenticated = require('../middlewares/isAuthenticated');
//const Tweet = require('../models/tweet');
const User = require('../models/user');

module.exports = function (app) {
  // TODO: check to see if user is authenticated
  // STUB
  router.use(isAuthenticated(app));
  // ENDSTUB

  router.post('/profile/checkOut', (req,res) => {
    let userId = req.user._id;
    User.checkOut(userId)
    .then( user => {
      res.json({success:true, data: user})
    })
    .catch(error => {
      console.log(error);
      res.json({success:false, message: "There was an error Checking out"})
    })
  });

  router.post('/profile/checkIn', (req,res) => {
    let userId = req.user._id;
    let streetId = req.body.streetId;
    console.log("userId : " + userId);
    User.checkIn(userId,streetId)
    .then( user => {
      res.json({success:true, data: user})
    })
    .catch(error => {
      console.log(error);
      res.json({success:false, message: "There was an error Checking in"})
    })
  });

  return router;
};
