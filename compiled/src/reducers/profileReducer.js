'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // providing this for  you bc im nice  :)


var _profileActions = require('../actions/profileActions');

var initialState = {
  profile: {
    name: '',
    species: '',
    photo: '',
    followers: [],
    following: [],
    isFollowing: false
  }
};

var profileReducer = function profileReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _profileActions.UPDATEPROFILE_FUL:
      return _extends({}, state, {
        profile: Object.assign({}, state.profile, action.profile)
      });
    case _profileActions.GETPROFILE_FUL:
      return _extends({}, state, {
        profile: action.profile
      });
    case _profileActions.FAVUNFAV_FUL:
      return _extends({}, state, {
        profile: Object.assign({}, state.profile, action.profile)
      });
    default:
      return state;
  }
};

exports.default = profileReducer;