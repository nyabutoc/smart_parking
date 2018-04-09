'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _tweetActions = require('../actions/tweetActions');

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tweet = function (_Component) {
  _inherits(Tweet, _Component);

  function Tweet(props) {
    _classCallCheck(this, Tweet);

    return _possibleConstructorReturn(this, (Tweet.__proto__ || Object.getPrototypeOf(Tweet)).call(this, props));
  }

  _createClass(Tweet, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          tweetId = _props.tweetId,
          authorName = _props.authorName,
          authorId = _props.authorId,
          authorPic = _props.authorPic,
          content = _props.content,
          isFavorited = _props.isFavorited,
          numFavorites = _props.numFavorites;

      var cardStyles = {
        marginBottom: '40px',
        padding: '10px'
      };
      var favoriteStyles = {
        color: '#FFF'
      };
      var imgStyles = {
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        marginRight: '10px'
      };
      var authorUrl = '/profile/' + authorId;
      var image = authorPic ? authorPic : 'https://files.allaboutbirds.net/wp-content/uploads/2015/06/prow-featured.jpg';
      var favoriteText = (isFavorited ? 'Unfavorite' : 'Favorite') + ' tweet';
      return _react2.default.createElement(
        'div',
        { className: 'card', style: cardStyles },
        _react2.default.createElement(
          'h5',
          { className: 'card-title' },
          _react2.default.createElement('img', { src: image, style: imgStyles }),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: authorUrl },
            ' ',
            authorName,
            ' '
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          content
        ),
        _react2.default.createElement(
          'a',
          {
            onClick: function onClick() {
              return _this2.props.favoriteTweet(tweetId);
            },
            style: favoriteStyles,
            className: 'btn btn-primary'
          },
          favoriteText
        ),
        _react2.default.createElement(
          'span',
          null,
          'This tweet has been favorited ',
          numFavorites,
          ' time(s)'
        )
      );
    }
  }]);

  return Tweet;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    favoriteTweet: function favoriteTweet(tweetId) {
      return dispatch((0, _tweetActions.favoriteTweet)(tweetId));
    }

  };
};
// set up a prop `favoriteTweet` dispatchings the favoriteTweet acition with the id
// of the tweet (as an argument to this function


var mapStateToProps = function mapStateToProps(state, ownProps) {
  return state.tweetReducer[ownProps.tweetId];
};
// setup this function so that you're rendering the correct  tweet
// ie looking at your state and just mapping the correct props onto
// this component


exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Tweet);