'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _authReducer = require('./authReducer');

var _authReducer2 = _interopRequireDefault(_authReducer);

var _tweetListReducer = require('./tweetListReducer');

var _tweetListReducer2 = _interopRequireDefault(_tweetListReducer);

var _tweetReducer = require('./tweetReducer');

var _tweetReducer2 = _interopRequireDefault(_tweetReducer);

var _profileReducer = require('./profileReducer');

var _profileReducer2 = _interopRequireDefault(_profileReducer);

var _messageReducer = require('./messageReducer');

var _messageReducer2 = _interopRequireDefault(_messageReducer);

var _discoverReducer = require('./discoverReducer');

var _discoverReducer2 = _interopRequireDefault(_discoverReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// you should somehow * combine reducers * hint hint
// so that the reducer looks like
// {
//  authReducer: authReducer
//  tweetList: tweetListReducer
//  tweet: tweetReducer
//  profileReducer: profileReducer
//  messageReducer: messageReducer
//  discoverReducer
// }
// store this reducer in a variable 'tweetApp''
var tweetApp = (0, _redux.combineReducers)({
	profileReducer: _profileReducer2.default,
	discoverReducer: _discoverReducer2.default,
	tweetListReducer: _tweetListReducer2.default,
	tweetReducer: _tweetReducer2.default,
	authReducer: _authReducer2.default,
	messageReducer: _messageReducer2.default
});
exports.default = tweetApp;