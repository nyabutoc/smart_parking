'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TweetList = require('./TweetList');

var _TweetList2 = _interopRequireDefault(_TweetList);

var _tweetActions = require('../actions/tweetActions');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProfileBox = function (_Component) {
  _inherits(ProfileBox, _Component);

  function ProfileBox(props) {
    _classCallCheck(this, ProfileBox);

    return _possibleConstructorReturn(this, (ProfileBox.__proto__ || Object.getPrototypeOf(ProfileBox)).call(this, props));
  }

  _createClass(ProfileBox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.user();
    }
  }, {
    key: 'render',
    value: function render() {
      var button = this.props.id ? _react2.default.createElement(
        'button',
        { className: 'btn btn-primary', onClick: this.props.favUnfav },
        this.props.profile.isFollowing === true ? 'Unfollow' : 'Follow'
      ) : '';
      var followersLength = this.props.profile.followers ? this.props.profile.followers.length : 0;
      var followingLength = this.props.profile.following ? this.props.profile.following.length : 0;
      return _react2.default.createElement(
        'div',
        { className: 'card' },
        _react2.default.createElement('img', { className: 'card-img-top', src: this.props.profile.image }),
        _react2.default.createElement(
          'div',
          { className: 'card-body' },
          _react2.default.createElement(
            'div',
            { className: 'card-title' },
            this.props.profile.name
          ),
          _react2.default.createElement(
            'p',
            { className: 'text-muted' },
            this.props.profile.species
          ),
          _react2.default.createElement('br', null),
          ' Followers:',
          followersLength,
          _react2.default.createElement('br', null),
          ' Following:',
          followingLength,
          _react2.default.createElement('br', null),
          button,
          _react2.default.createElement('br', null)
        )
      );
    }
  }]);

  return ProfileBox;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    profile: state.profileReducer.profile
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(ProfileBox);