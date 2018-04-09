'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouterDom = require('react-router-dom');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _mainReducer = require('./reducers/mainReducer');

var _mainReducer2 = _interopRequireDefault(_mainReducer);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// apply Middlewares thunkMiddleware and logger (thunks handle async stuff
// logger handles showing you how to get  to the next state
// create a store with these middlewares and the mainReducer

var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, _reduxLogger2.default)(_redux.createStore);
var store = createStoreWithMiddleware(_mainReducer2.default);

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(_App2.default, null)
  )
), document.getElementById('root'));