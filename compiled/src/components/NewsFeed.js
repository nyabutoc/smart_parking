'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TweetList = require('./TweetList');

var _TweetList2 = _interopRequireDefault(_TweetList);

var _DiscoverBirds = require('./DiscoverBirds');

var _DiscoverBirds2 = _interopRequireDefault(_DiscoverBirds);

var _reactRedux = require('react-redux');

var _tweetActions = require('../actions/tweetActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewsFeed = function (_Component) {
  _inherits(NewsFeed, _Component);

  function NewsFeed(props) {
    _classCallCheck(this, NewsFeed);

    return _possibleConstructorReturn(this, (NewsFeed.__proto__ || Object.getPrototypeOf(NewsFeed)).call(this, props));
  }

  _createClass(NewsFeed, [{
    key: 'render',
    value: function render() {
      // TODO: render out this component that is the newsfeed
      // should render out the DiscoverBirds component
      // note that it needs a property getDisocverBirds that
      // is a function which dispatches the getDiscoverBirds action
      // also needs to mount TweetList with a property
      // loadTweets that is a function which dispatches the
      // loadTweets action.
      // ultimate html structure will look like
      // <div class="container">
      //  <h2>News Feed</h2>
      //  <div class="row">
      //    <div class="col-md-4">
      //      ...discoverbirds
      //    </div>
      //    <div class="col-md-8">
      //      ...tweetlist
      //    </div>
      //  </div>
      // </div>
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'h2',
          null,
          'News Feed'
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-4' },
            _react2.default.createElement(_DiscoverBirds2.default, { getDiscoverBirds: this.props.getDiscoverBirds })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-8' },
            _react2.default.createElement(_TweetList2.default, { loadTweets: this.props.loadTweets })
          )
        )
      );
    }
  }]);

  return NewsFeed;
}(_react.Component);

// hint hint ;)


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loadTweets: function loadTweets() {
      return dispatch((0, _tweetActions.loadTweets)());
    },
    getDiscoverBirds: function getDiscoverBirds() {
      return dispatch((0, _tweetActions.getDiscoverBirds)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(NewsFeed);