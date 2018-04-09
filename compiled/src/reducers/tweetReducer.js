'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _tweetActions = require('../actions/tweetActions');

// createa  reducer called tweetReducer that has an initalState {}
// if the LOADTWEETS_FUL action occurs, make sure that your eventual
// state would look like
// {
//  whateverTheTweetId: { fullTweetObj },
//  whateverTheTweetId2: { fullTweetobj2 }
//  ...
// }
// basically i should be able to do state[someTweetId] and get the
// full tweet object containing that tweet
// on the CREATETWEET_FULa nd FAVORITE_FUL actions, just  set the
// tweet in the state equal to the data you get from the action

var tweetReducer = function tweetReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	switch (action.type) {
		case _tweetActions.LOADTWEETS_FUL:
			var output = {};
			console.log(action.tweets);
			action.tweets.forEach(function (tweet) {
				console.log(tweet);
				output[tweet.tweetId] = tweet;
			});
			return output;
		case _tweetActions.CREATETWEET_FUL:
		case _tweetActions.FAVORITE_FUL:
			return action.data;
		default:
			return state;
	}
};
exports.default = tweetReducer;