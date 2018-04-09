'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logOut = logOut;
exports.loginUser = loginUser;
exports.registerUser = registerUser;
// use this file as a reference
// for implementing your other files
// explanation:
//
//
// Up here we're just setting some constants to refer to our actions
var LOGIN_FUL = exports.LOGIN_FUL = 'LOGIN_FUL';
var LOGIN_REJ = exports.LOGIN_REJ = 'LOGIN_REJ';

var REGISTER_FUL = exports.REGISTER_FUL = 'REGISTER_FUL';
var REGISTER_REJ = exports.REGISTER_REJ = 'REGISTER_REJ';

var LOGOUT_FUL = exports.LOGOUT_FUL = 'LOGOUT_FUL';

// in this section, we're defining our synchronous action creators

function receiveLogin(token) {
  return {
    type: LOGIN_FUL,
    token: token,
    message: 'You have logged in successfully'
  };
}

function loginError(message) {
  return {
    type: LOGIN_REJ,
    error: message
  };
}

function registerSuccess(token) {
  return {
    type: REGISTER_FUL,
    token: token,
    message: 'You have registered and are now logged in'
  };
}

function registerError(message) {
  return {
    type: REGISTER_REJ,
    error: message
  };
}

function logOut() {
  // clear the token we have stored locally
  localStorage.removeItem('token');
  return {
    type: LOGOUT_FUL,
    isFetching: false,
    isAuthenticated: false,
    message: 'You have logged out'
  };
}

function loginUser(creds) {
  // config is what 'fetch' will use to configure its request
  var config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, // this line is important, if this content-type is not set it wont work
    body: JSON.stringify(creds)
  };
  return function (dispatch) {
    return fetch('/account/signin', config).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (!res.success) {
        // ie we got a valid response, but the response says that this wasn't a successful login
        return Promise.reject(res.message);
      } else {
        // things are all good, we set a token locally
        localStorage.setItem('token', res.token);
        // tell our store that login has been done
        dispatch(receiveLogin(res.token));
      }
    }).catch(function (err) {
      return dispatch(loginError(err));
    });
  };
}

function registerUser(info) {
  var config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, // this line is important, if this content-type is not set it wont work
    body: JSON.stringify(info)
  };
  return function (dispatch) {
    return fetch('/account/signup', config).then(function (response) {
      return response.json();
    }).then(function (res) {
      if (!res.success) {
        dispatch(registerError(res.message));
        return Promise.reject(res.message);
      } else {
        localStorage.setItem('token', res.token);
        dispatch(registerSuccess(res.token));
      }
    }).catch(function (err) {
      return dispatch(registerError(err));
    });
  };
}