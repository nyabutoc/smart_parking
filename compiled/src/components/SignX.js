'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _auth = require('../actions/auth');

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import Tweet from './Tweet';

var SignX = function (_Component) {
  _inherits(SignX, _Component);

  function SignX(props) {
    _classCallCheck(this, SignX);

    return _possibleConstructorReturn(this, (SignX.__proto__ || Object.getPrototypeOf(SignX)).call(this, props));
  }

  _createClass(SignX, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // if  the user is authenticated,
      // change the location to /feed
      // via this.props.history.push
      if (this.props.authenticated) {
        this.props.history.push('/feed');
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // do the same thing as in component did mount
      if (this.props.authenticated) {
        this.props.history.push('/feed');
      }
    }
  }, {
    key: 'signin',
    value: function signin(e) {
      e.preventDefault();
      var dispatch = this.props.dispatch;

      var username = this.refs.username.value;
      var password = this.refs.password.value;
      dispatch((0, _auth.loginUser)({
        username: username,
        password: password
      }));
    }
  }, {
    key: 'signup',
    value: function signup(e) {
      e.preventDefault();
      var dispatch = this.props.dispatch;

      var username = this.refs.rusername.value;
      var password = this.refs.rpassword.value;
      var name = this.refs.name.value;
      var species = this.refs.species.value;
      var photo = this.refs.photo.value;
      dispatch((0, _auth.registerUser)({
        username: username,
        password: password,
        species: species,
        photo: photo,
        name: name
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isAuthenticated = _props.isAuthenticated,
          isFetching = _props.isFetching,
          messages = _props.messages;

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement(
              'form',
              { onSubmit: this.signin.bind(this) },
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Username:'
                ),
                _react2.default.createElement('input', {
                  className: 'form-control',
                  type: 'text',
                  ref: 'username'
                })
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Password:'
                ),
                _react2.default.createElement('input', {
                  className: 'form-control',
                  type: 'password',
                  ref: 'password'
                })
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement('input', {
                  type: 'submit',
                  className: 'btn btn-primary',
                  value: 'Sign In'
                })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement(
              'form',
              { onSubmit: this.signup.bind(this) },
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Username:'
                ),
                _react2.default.createElement('input', {
                  className: 'form-control',
                  type: 'text',
                  ref: 'rusername'
                })
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Password:'
                ),
                _react2.default.createElement('input', {
                  className: 'form-control',
                  type: 'password',
                  ref: 'rpassword'
                })
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Name:'
                ),
                _react2.default.createElement('input', {
                  className: 'form-control',
                  type: 'text',
                  ref: 'name'
                })
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Species:'
                ),
                _react2.default.createElement('input', {
                  className: 'form-control',
                  type: 'text',
                  ref: 'species'
                })
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Image:'
                ),
                _react2.default.createElement('input', {
                  className: 'form-control',
                  type: 'text',
                  ref: 'photo'
                })
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement('input', {
                  type: 'submit',
                  className: 'btn btn-primary',
                  value: 'Sign Up'
                })
              )
            )
          )
        )
      );
    }
  }]);

  return SignX;
}(_react.Component);

function mapStateToProps(state) {
  // set it up so that statue.authReducer is mapped  to the props
  var authReducer = state.authReducer;

  return authReducer;
}

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(SignX));