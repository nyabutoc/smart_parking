'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = requiresAuth;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// we give you this file, but understand how it works :)
// this file generates a component that is wrapped with other properties
// if the user is authenticated, we render out the component and  also load on
// some other properties such as checking to see if the user is logged in when
// the component mouts or changes
// if the user isn't authenticated, we then dispatch a  reject login function call
// (ref the mapDispatchToProps at the bottom of the file
// and we change the route to /signX which in turn renders the SignX  component
// "kicking out" our user

function requiresAuth(Component) {
  var AuthHOC = function (_React$Component) {
    _inherits(AuthHOC, _React$Component);

    function AuthHOC() {
      _classCallCheck(this, AuthHOC);

      return _possibleConstructorReturn(this, (AuthHOC.__proto__ || Object.getPrototypeOf(AuthHOC)).apply(this, arguments));
    }

    _createClass(AuthHOC, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.checkIfLoggedIn();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.checkIfLoggedIn();
      }
    }, {
      key: 'checkIfLoggedIn',
      value: function checkIfLoggedIn() {
        var isAuthenticated = this.props.isAuthenticated;

        if (!isAuthenticated) {
          this.props.rejectLogin();
          this.props.history.push('/signX');
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          this.props.isAuthenticated ? _react2.default.createElement(Component, this.props) : null
        );
      }
    }]);

    return AuthHOC;
  }(_react2.default.Component);

  var mapStateToProps = function mapStateToProps(state) {
    // only look at  the auth reducer
    var authReducer = state.authReducer;
    var isAuthenticated = authReducer.isAuthenticated;

    return {
      isAuthenticated: isAuthenticated
    };
  };

  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      rejectLogin: function rejectLogin() {
        return dispatch({
          type: 'LOGIN_REJ',
          error: 'Tweet tweet, you aren\'t authenticated'
        });
      }
    };
  };

  // withRouter is new. That's just saying that we should give our component the abilities
  // to read from the React Router state via its props (thats how we can change the page, its bc
  // withRouter injects  the prop 'history' which in turn has a function .push('string') that
  // changes the page

  return (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AuthHOC));
}