'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DISCOVERBIRDS_REJ = exports.DISCOVERBIRDS_FUL = exports.CREATETWEET_REJ = exports.CREATETWEET_FUL = exports.LOADTWEETS_FUL = exports.LOADTWEETS_REJ = exports.FAVORITE_FUL = exports.FAVORITE_REJ = undefined;
exports.loadTweets = loadTweets;
exports.loadTweetsForProfile = loadTweetsForProfile;
exports.favoriteTweet = favoriteTweet;
exports.createNewTweet = createNewTweet;
exports.getDiscoverBirds = getDiscoverBirds;

var _authenticatedRequest = require('../utils/authenticatedRequest');

var _authenticatedRequest2 = _interopRequireDefault(_authenticatedRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FAVORITE_REJ = exports.FAVORITE_REJ = 'FAVORITE_REJ';
var FAVORITE_FUL = exports.FAVORITE_FUL = 'FAVORITE_FUL';

var LOADTWEETS_REJ = exports.LOADTWEETS_REJ = 'LOADTWEETS_REJ';
var LOADTWEETS_FUL = exports.LOADTWEETS_FUL = 'LOADTWEETS_FUL';

var CREATETWEET_FUL = exports.CREATETWEET_FUL = 'CREATETWEET_FUL';
var CREATETWEET_REJ = exports.CREATETWEET_REJ = 'CREATETWEET_REJ';

var DISCOVERBIRDS_FUL = exports.DISCOVERBIRDS_FUL = 'DISCOVERBIRDS_FUL';
var DISCOVERBIRDS_REJ = exports.DISCOVERBIRDS_REJ = 'DISCOVERBIRDS_REJ';

// this is  a helper method you can use to getTweets from a given URL.
function getTweets(url) {
  return function (dispatch) {
    (0, _authenticatedRequest2.default)('GET', url).then(function (res) {
      return res.json();
    }).then(function (resp) {
      dispatch({
        type: LOADTWEETS_FUL,
        tweets: resp.data
      });
    }).catch(function (error) {
      dispatch({
        type: LOADTWEETS_REJ,
        error: error
      });
    });
  };
}

function loadTweets() {
  // loads tweets from /api/newsfeed ie *get the tweets* from that url
  // async action creator
  return getTweets('/api/newsfeed ');
}

function loadTweetsForProfile(userId) {
  // will send  a request to /api/profile/userId/tweets if a userId is specified
  // else it will just send a request to /api/profile/tweets
  // then should *get the Tweets*  (hint hint) from that url
  // async action creator
  if (userId) {
    return getTweets('/api/profile/' + userId + '/tweets ');
  } else {
    return getTweets('/api/profile/tweets');
  }
  // return  getTweets(`/api/profile/${userId}/tweets`);
}

function favoriteTweet(tweetId) {
  // authenticated request example
  // we send a POST request that is authenticated to /api/tweet/${tweetId}/favorite
  // if the request is successful we send  a FAVORITE_FUL action with message  and some  data
  // from the  response (determined by express)
  return function (dispatch) {
    (0, _authenticatedRequest2.default)('POST', '/api/tweet/' + tweetId + '/favorite').then(function (res) {
      return res.json();
    }).then(function (resp) {
      var data = resp.data;
      dispatch({
        type: FAVORITE_FUL,
        message: 'You have favorited this tweet',
        data: data
      });
    }).catch(function (error) {
      dispatch({
        type: FAVORITE_REJ,
        error: error
      });
    });
  };
}

function createNewTweet(tweetContent) {
  // authenticated request # 2
  // we send a POST request that is authenticated to /api/tweet
  // if the request is successful we send  a CREATETWEET_FUL action with message and some data
  // corresponding  to the new tweet (we get it from the response (determined by express))
  // if there is  an error, dispatch a CREATETWEET_REJ error
  return function (dispatch) {
    (0, _authenticatedRequest2.default)('POST', '/api/tweet', tweetContent).then(function (res) {
      return res.json();
    }).then(function (resp) {
      var data = resp.data;
      dispatch({
        type: CREATETWEET_FUL,
        message: 'You have created a new tweet',
        data: data
      });
    }).catch(function (error) {
      dispatch({
        type: CREATETWEET_REJ,
        error: error
      });
    });
  };
}

function getDiscoverBirds() {
  // example of get request
  return function (dispatch) {
    return (0, _authenticatedRequest2.default)('GET', '/api/newsfeed/discover-birds').then(function (res) {
      return res.json();
    }).then(function (resp) {
      var users = resp.data;
      dispatch({
        type: DISCOVERBIRDS_FUL,
        data: users
      });
    }).catch(function (error) {
      dispatch({
        type: DISCOVERBIRDS_REJ,
        message: 'Error fetching birds',
        error: error
      });
    });
  };
}