'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Provider = function Provider(_ref) {
  var theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ['theme']);

  return _react2.default.createElement(_styledComponents.ThemeProvider, Object.assign({ theme: Object.assign({}, _theme2.default, theme) }, props));
};

Provider.defaultProps = {
  theme: {}
};

Provider.displayName = 'WebUI.Rebass.Provider';

exports.default = Provider;