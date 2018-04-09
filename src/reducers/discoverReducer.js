import {
  DISCOVERBIRDS_FUL,
} from '../actions/tweetActions';

// create a reducer function called discoverReducerw ith initialState
// { discovers: [] }
// if the action passed in is DISCOVERBIRDS_FUL then set discovers equal
// to the data  of that action (refer  to the action caller for details on
// what  that means. else just return the state
//
const discoverReducer = (state = { discovers: [] },action) => {
	switch(action.type) {
		case DISCOVERBIRDS_FUL:
			return {discovers: action.data}
		default: 
			return state
	}
}

export default discoverReducer;
