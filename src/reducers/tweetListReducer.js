import {
  LOADTWEETS_FUL,
} from '../actions/tweetActions';

// createa  reducer function named tweetListReducer with initial state
// { ids: [] }.
// When the LOADTWEETS_FUL action occurs, set ids equal to justt he tweetId
// for all the tweets from the action
const tweetListReducer = (state ={ ids: []}, action ) => {
	switch (action.type) {
		case LOADTWEETS_FUL:
			console.log(action.tweets);
			return {ids: action.tweets.map(tweet => tweet.tweetId)}
		default:
			return state
	}
}

export default tweetListReducer;
