'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  &::-webkit-progress-bar {\n    background-color: ', ';\n  }\n'], ['\n  &::-webkit-progress-bar {\n    background-color: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _rebass = require('rebass');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _recompose = require('recompose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } // import React from 'react';


var Progress = (0, _styledComponents2.default)(_rebass.Progress)(_templateObject, function (props) {
  return props.bg;
});

var useBgColorByName = (0, _recompose.withProps)(function (props) {
  return _theme2.default.colors[props.bg] ? { bg: _theme2.default.colors[props.bg] } : { bg: props.bg };
});

exports.default = (0, _recompose.compose)(useBgColorByName)(Progress);