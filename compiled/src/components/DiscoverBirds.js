'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DiscoverBirds = function (_Component) {
  _inherits(DiscoverBirds, _Component);

  function DiscoverBirds() {
    _classCallCheck(this, DiscoverBirds);

    return _possibleConstructorReturn(this, (DiscoverBirds.__proto__ || Object.getPrototypeOf(DiscoverBirds)).call(this));
  }

  _createClass(DiscoverBirds, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // once the component mounts, call the the function
      // that allows you to discover birds (hint refer to the
      // properties of the component
      this.props.getDiscoverBirds();
    }
  }, {
    key: 'render',
    value: function render() {
      var users = [];

      this.props.discovers.map(function (i, idx) {
        var authorUrl = '/profile/' + i.id;
        users.push(_react2.default.createElement(
          'div',
          { key: idx },
          _react2.default.createElement(
            'a',
            { href: authorUrl },
            i.name
          )
        ));
      });

      return _react2.default.createElement(
        'div',
        { className: 'card' },
        _react2.default.createElement(
          'div',
          { className: 'card-body' },
          _react2.default.createElement(
            'h3',
            { className: 'card-title' },
            'Discover Birds'
          ),
          users
        )
      );
    }
  }]);

  return DiscoverBirds;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return state.discoverReducer;
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(DiscoverBirds);