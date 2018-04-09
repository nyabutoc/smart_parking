'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _profileActions = require('../actions/profileActions');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditProfile = function (_Component) {
  _inherits(EditProfile, _Component);

  function EditProfile(props) {
    _classCallCheck(this, EditProfile);

    var _this = _possibleConstructorReturn(this, (EditProfile.__proto__ || Object.getPrototypeOf(EditProfile)).call(this, props));

    _this.submitForm = _this.submitForm.bind(_this);
    return _this;
  }

  _createClass(EditProfile, [{
    key: 'submitForm',
    value: function submitForm(e) {
      e.preventDefault();
      var data = {
        name: this.refs.name.value,
        species: this.refs.species.value,
        photo: this.refs.photo.value
      };
      // TODO: make a call to update the profile
      this.props.updateProfile(data);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'h2',
          null,
          'Update Info:'
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.submitForm },
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
              value: 'Make Edits'
            })
          )
        )
      );
    }
  }]);

  return EditProfile;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateProfile: function updateProfile(data) {
      return dispatch((0, _profileActions.updateProfile)(data));
    }
  };
};

// set up a call to the updateProfile async action creator
// ie just do the regular mapDispatchToProps type of
// pattern for dispatching updateProfile

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(EditProfile);