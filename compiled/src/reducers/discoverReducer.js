'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _tweetActions = require('../actions/tweetActions');

// create a reducer function called discoverReducerw ith initialState
// { discovers: [] }
// if the action passed in is DISCOVERBIRDS_FUL then set discovers equal
// to the data  of that action (refer  to the action caller for details on
// what  that means. else just return the state
//
var discoverReducer = function discoverReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { discovers: [] };
	var action = arguments[1];

	switch (action.type) {
		case _tweetActions.DISCOVERBIRDS_FUL:
			return { discovers: action.data };
		default:
			return state;
	}
};

exports.default = discoverReducer;