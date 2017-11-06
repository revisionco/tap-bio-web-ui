'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chromaJs = require('chroma-js');

var _chromaJs2 = _interopRequireDefault(_chromaJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gray = {
  dark: '#031530',
  light: '#F5F7F8',
  names: ['gray10', 'gray20', 'gray30', 'gray40', 'gray50', 'gray60', 'gray70', 'gray80', 'gray90']
};

var purple = {
  light: '#9013fe',
  dark: '#570b99',
  names: ['darkPurple', 'purple']
};

var blue = {
  light: '#459beb',
  dark: '#126dee',
  names: ['darkBlue', 'blue']
};

var getColorScale = function getColorScale(color) {
  return color.names.reduce(function (acc, name, index) {
    var len = color.names.length;
    var step = index / (len - 1);
    acc[name] = _chromaJs2.default.scale([color.dark, color.light])(step).hex();
    return acc;
  }, {});
};

exports.default = {
  breakpoints: [32, 48, 64, 80],
  space: [0, 4, 8, 12, 16, 24, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96],
  weights: [400, 700],
  colors: Object.assign({}, getColorScale(gray), getColorScale(purple), getColorScale(blue)),
  radius: 12,
  font: 'Roboto Regular, Roboto, sans-serif',
  monospace: '"SF Mono", "Roboto Mono", Menlo, monospace'
};