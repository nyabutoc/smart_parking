'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TweetList = require('./TweetList');

var _TweetList2 = _interopRequireDefault(_TweetList);

var _ProfileBox = require('./ProfileBox');

var _ProfileBox2 = _interopRequireDefault(_ProfileBox);

var _CreateTweetBox = require('./CreateTweetBox');

var _CreateTweetBox2 = _interopRequireDefault(_CreateTweetBox);

var _tweetActions = require('../actions/tweetActions');

var _profileActions = require('../actions/profileActions');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_Component) {
  _inherits(Profile, _Component);

  function Profile(props) {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
  }

  _createClass(Profile, [{
    key: 'render',
    value: function render() {
      // the component should have  a ProfileBox  and TweetList component, if
      // an id is specified in the url (you can check this by looking at
      // this.props.match.params.id then render out a CreateTweetBox else dont
      // the ProfileBox should have the props `id` corresponding  to this.props.match.params.id
      // `user` corresponding to a  function that will dispatch the getUser async function with
      // appropriate arguments
      // `favUnfav` corresponding to a function that  will dispatch the favUnfav async function with
      // appropriate arguments
      // the TweetList should have a single property `loadTweets` equal  to a function that will
      // dispatch the loadTweets async function with appropriate arguments (in this case the
      // current user id which you can grab from this.props.match.params.id
      //
      // // html structure
      // <div class="container">
      //  <h2>Profile</h2>
      //  <div class="row">
      //    <div class="col-md-4">
      //      ... profile box
      //    </div>
      //    <div class="col-md-8">
      //      ... optionally a create tweet box
      //      ...  tweet list
      //    </div>
      //  </div>
      // </div>
      var id = this.props.match.params.id;
      var createTweetBox = id ? '' : _react2.default.createElement(_CreateTweetBox2.default, null);
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'h2',
          null,
          'Profile'
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-4' },
            _react2.default.createElement(_ProfileBox2.default, { id: id, user: this.props.getUser, favUnfav: this.props.favUnfav })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-8' },
            createTweetBox,
            _react2.default.createElement(_TweetList2.default, { loadTweets: this.props.loadTweets })
          )
        )
      );
    }
  }]);

  return Profile;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownprops) {
  return {
    favUnfav: function favUnfav() {
      return dispatch((0, _profileActions.favUnfav)(ownprops.match.params.id));
    },
    getUser: function getUser() {
      return dispatch((0, _profileActions.getUser)(ownprops.match.params.id));
    },
    loadTweets: function loadTweets() {
      return dispatch((0, _tweetActions.loadTweetsForProfile)(ownprops.match.params.id));
    }

  };
};

// optionally use this to handle assigning dispatch actions to props


exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Profile);