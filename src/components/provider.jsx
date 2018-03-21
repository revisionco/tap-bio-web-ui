import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../theme';

const Provider = ({ theme, ...props }) => {
  return <ThemeProvider theme={{ ...defaultTheme, ...theme }} {...props} />;
};

Provider.defaultProps = {
  theme: {},
};

Provider.displayName = 'WebUI.Rebass.Provider';

export default Provider;
