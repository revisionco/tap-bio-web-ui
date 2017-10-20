import React from 'react';
import { storiesOf } from '@storybook/react';
import { Flex, Box, Pre } from 'src';
import theme from '../src/theme';

console.log(theme);

const { colors } = theme;
const keys = Object.keys(colors);

storiesOf('Colors', module).add('Swatches', () => (
  <Flex wrap>
    {keys.map(key => (
      <Box key={key} p={2}>
        <Box p={4} w={128} bg={key} />
        <Pre f={0}>{key}</Pre>
        <Pre f={0}>{colors[key]}</Pre>
      </Box>
    ))}
  </Flex>
));
