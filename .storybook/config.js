import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';
import { injectGlobal } from 'styled-components';
import { Box } from 'grid-styled';
import { Provider } from 'rebass';

addDecorator(story => <div style={{ textAlign: 'center' }}>{story()}</div>);
addDecorator(withKnobs);

injectGlobal([], {
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    lineHeight: 1.5,
    margin: 0,
  },
});

const Demo = props => (
  <Provider>
    <Box p={3}>{props.story()}</Box>
  </Provider>
);

addDecorator(story => <Demo story={story} />);

setOptions({
  name: 'Rebass',
  url: 'http://jxnblk.com/rebass',
  showDownPanel: true,
});

// const req = require.context('.', true, /\.jsx$/);
const req = require.context('../stories', true, /\.jsx$/);

const load = () => {
  // require('./Library')
  req.keys().forEach(req);
};

configure(load, module);
