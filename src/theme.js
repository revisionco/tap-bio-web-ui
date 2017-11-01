import chroma from 'chroma-js';

const gray = {
  dark: '#031530',
  light: '#F5F7F8',
  names: ['gray10', 'gray20', 'gray30', 'gray40', 'gray50', 'gray60', 'gray70', 'gray80', 'gray90'],
};

const purple = {
  light: '#9013fe',
  dark: '#570b99',
  names: ['darkPurple', 'purple'],
};

const blue = {
  light: '#459beb',
  dark: '#126dee',
  names: ['darkBlue', 'blue'],
};

const getColorScale = color =>
  color.names.reduce(function(acc, name, index) {
    const len = color.names.length;
    const step = index / (len - 1);
    acc[name] = chroma.scale([color.dark, color.light])(step).hex();
    return acc;
  }, {});

export default {
  breakpoints: [32, 48, 64, 80],
  space: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96],
  weights: [400, 700],
  colors: {
    ...getColorScale(gray),
    ...getColorScale(purple),
    ...getColorScale(blue),
  },
  radius: 4,
  font: 'Roboto Regular, Roboto, sans-serif',
  monospace: '"SF Mono", "Roboto Mono", Menlo, monospace',
};
