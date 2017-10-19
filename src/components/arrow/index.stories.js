import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import Arrow from './index';

storiesOf('Components', module).add('Arrow', () => (
  <Arrow direction={select('direction=', ['up', 'down'], 'down')} />
));
