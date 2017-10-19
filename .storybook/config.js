import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
// import JSXAddon from 'storybook-addon-jsx';

addDecorator(story => <div style={{ textAlign: 'center' }}>{story()}</div>);
addDecorator(withKnobs);
// addDecorator(JSXAddon);

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
