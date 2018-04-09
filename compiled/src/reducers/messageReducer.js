'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messageReducer = function messageReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { messages: [] };
	var action = arguments[1];

	if (action.type === 'DISMISS') {
		var myArray = state.messages;
		var indexToRemove = action.idx;
		var outputArray = myArray.slice(0, indexToRemove).concat(myArray.slice(indexToRemove + 1));
		return { messages: outputArray };
	}
	if (action.error) {
		var output = { messageType: 'error',
			message: action.error
		};
		return { messages: _lodash2.default.concat(state.messages, output) };
	} else if (action.message) {
		var _output = { messageType: 'info',
			message: action.message
		};
		return { messages: _lodash2.default.concat(state.messages, _output) };
	} else {
		return state;
	}
}; // createa reducer function messageReducer that has  an initialState
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
exports.default = messageReducer;