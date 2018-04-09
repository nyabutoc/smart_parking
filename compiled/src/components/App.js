'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _SignX = require('./SignX');

var _SignX2 = _interopRequireDefault(_SignX);

var _Logout = require('./Logout');

var _Logout2 = _interopRequireDefault(_Logout);

var _AuthHOC = require('./AuthHOC');

var _AuthHOC2 = _interopRequireDefault(_AuthHOC);

var _NewsFeed = require('./NewsFeed');

var _NewsFeed2 = _interopRequireDefault(_NewsFeed);

var _NavBar = require('./NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _EditProfile = require('./EditProfile');

var _EditProfile2 = _interopRequireDefault(_EditProfile);

var _Flashes = require('./Flashes');

var _Flashes2 = _interopRequireDefault(_Flashes);

var _Profile = require('./Profile');

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      // should create a router with the following structure
      // /profile/:id? => Profile must be protected (hint how  can we use AuthHOC?)
      // /signx => SignX
      // /logout => Logout (must be protected)
      // /edit-profile  => EditProfile must be authenticated
      // /feed => NewsFeed must be authenticated
      // If it doesn't match anything, just put  the following syntax to say, render the signx page
      // <Route component={SignX}/>
      // Note the above should all be within a switch
      //
      // final html structure will look like
      //
      // <div class="container-fluid">
      //    ...navigation bar from NavBar
      //    ...flashes from Flashes
      //    <div>
      //      .. whatever route we are on
      //    </div>
      //  </div>

      return _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(_NavBar2.default, null),
        _react2.default.createElement(_Flashes2.default, null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { path: '/profile/:id?', component: (0, _AuthHOC2.default)(_Profile2.default) }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/logout', component: (0, _AuthHOC2.default)(_Logout2.default) }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/signx', component: _SignX2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/feed', component: (0, _AuthHOC2.default)(_NewsFeed2.default) }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/edit-profile', component: (0, _AuthHOC2.default)(_EditProfile2.default) }),
            _react2.default.createElement(_reactRouterDom.Route, { component: _SignX2.default })
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;