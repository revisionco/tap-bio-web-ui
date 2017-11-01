var _templateObject = _taggedTemplateLiteral(['\n  &::-webkit-progress-bar {\n    background-color: ', ';\n  }\n'], ['\n  &::-webkit-progress-bar {\n    background-color: ', ';\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import React from 'react';
import styled from 'styled-components';
import { Progress as Base } from 'rebass';
import theme from '../theme';
import { compose, withProps } from 'recompose';

var Progress = styled(Base)(_templateObject, function (props) {
  return props.bg;
});

var useBgColorByName = withProps(function (props) {
  console.log(props);
  return theme.colors[props.bg] ? { bg: theme.colors[props.bg] } : { bg: props.bg };
});

export default compose(useBgColorByName)(Progress);