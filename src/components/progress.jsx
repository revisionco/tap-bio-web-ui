// import React from 'react';
import styled from 'styled-components';
import { Progress as Base } from 'rebass';
import theme from '../theme';
import { compose, withProps } from 'recompose';

const Progress = styled(Base)`
  &::-webkit-progress-bar {
    background-color: ${props => props.bg};
  }
`;

const useBgColorByName = withProps(props => {
  console.log(props);
  return theme.colors[props.bg] ? { bg: theme.colors[props.bg] } : { bg: props.bg };
});

export default compose(useBgColorByName)(Progress);
