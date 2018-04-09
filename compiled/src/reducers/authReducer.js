'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _auth = require('../actions/auth');

// create a reducer function called `auth` with initialState
// { isAuthenticated: localStorage.getItem('token')  ? true : false }
//  and if the actions dispatched are
//  LOGIN_FUL or REGISTER_FUL, set isAuthenticated to true
//  If the action dispatch is
//  REGISTER_REJ, LOGOUT_FUL, LOGIN_REJ
//  set isAuthenticated to false
//  when i say "set" i mean in the state
//  if none of these actions are matched, just return the state

var auth = function auth() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { isAuthenticated: localStorage.getItem('token') ? true : false };
	var action = arguments[1];

	switch (action.type) {
		case _auth.LOGIN_FUL:
		case _auth.REGISTER_FUL:
			return { isAuthenticated: true };
		case _auth.REGISTER_REJ:
		case _auth.LOGOUT_FUL:
		case _auth.LOGIN_REJ:
			return { isAuthenticated: false };
		default:
			return state;
	}
};

//
exports.default = auth;