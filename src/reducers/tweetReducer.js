import {
  LOADTWEETS_FUL,
  CREATETWEET_FUL,
  FAVORITE_FUL,
} from '../actions/tweetActions';

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

const tweetReducer = (state = {}, action) => {
	switch(action.type) {
		case LOADTWEETS_FUL:
			let output = {};
			console.log(action.tweets)
		 	action.tweets.forEach(tweet => {
		 		console.log(tweet);
		 		output[tweet.tweetId] = tweet;
		 	}); 
		 	return output;
		case CREATETWEET_FUL:
		case FAVORITE_FUL:
			return action.data
		default:
			return state;	
	}
}
export default tweetReducer;