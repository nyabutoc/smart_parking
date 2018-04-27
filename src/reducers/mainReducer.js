import { combineReducers } from 'redux';
import authReducer from './authReducer';
//import tweetListReducer from './tweetListReducer';
//import tweetReducer from './tweetReducer';
//import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
//import discoverReducer from './discoverReducer';
import streetReducer from './streetReducer';
import availableParkingReducer from'./availableParkingReducer';

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
var tweetApp = combineReducers({
	//profileReducer,
	//discoverReducer,
	//tweetListReducer,
	//tweetReducer,
	//authReducer,
	//messageReducer,
	availableParkingReducer,
	streetReducer
});
export default tweetApp;
