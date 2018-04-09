// createa reducer function messageReducer that has  an initialState
// { messages: [] }
// If any action has a property 'error' on it, then append to the messages
// array a new object
//    { messageType: 'error' if the  action has an error  property else 'info',
//      message: action.error if an error else action.message
//    }
// Also handle the case where the action type is DISMISS
// if that happens, then remove from the messages array the index supplied
// with the dismiss  action
// remember all these changes must be immutable (I use mutable language
// terms for simplicity
import _ from 'lodash';
const messageReducer = (state = {messages: []}, action) => {
	if (action.type === 'DISMISS') {
		let myArray = state.messages;
		let indexToRemove = action.idx;
		let outputArray = myArray.slice(0,indexToRemove).concat(myArray.slice(indexToRemove+1));
		return {messages: outputArray}
	}
	if (action.error) {
		let output =  { messageType: 'error',
			message: action.error
		}
		return {messages: _.concat(state.messages, output)};

	} else if (action.message) {
		let output =  { messageType: 'info',
			message: action.message
		}
		return {messages: _.concat(state.messages, output)};
	}
	else {
		return state;
	}
}

export default messageReducer;
