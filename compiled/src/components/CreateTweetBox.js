'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _tweetActions = require('../actions/tweetActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateTweetBox = function (_Component) {
  _inherits(CreateTweetBox, _Component);

  function CreateTweetBox(props) {
    _classCallCheck(this, CreateTweetBox);

    var _this = _possibleConstructorReturn(this, (CreateTweetBox.__proto__ || Object.getPrototypeOf(CreateTweetBox)).call(this, props));

    _this.submitTweet = _this.submitTweet.bind(_this);
    return _this;
  }

  _createClass(CreateTweetBox, [{
    key: 'submitTweet',
    value: function submitTweet(e) {
      e.preventDefault();
      var tweetContent = this.refs.newTweet.value;
      // TODO: include a call to create a new tweet
      console.log('tweetContent' + tweetContent);
      this.props.createNewTweet({ content: tweetContent });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { onSubmit: this.submitTweet },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                null,
                'What\'s happening?'
              ),
              _react2.default.createElement('textarea', { className: 'form-control', ref: 'newTweet' })
            ),
            _react2.default.createElement('input', {
              type: 'submit',
              className: 'btn btn-primary',
              value: 'submit'
            })
          )
        )
      );
    }
  }]);

  return CreateTweetBox;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    createNewTweet: function createNewTweet(tweetContent) {
      return dispatch((0, _tweetActions.createNewTweet)(tweetContent));
    }
  };
};

// supply the component with a property 'createNewTweet' that will dispatch
// the createNewTweet action  with the new tweet's content


exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(CreateTweetBox);