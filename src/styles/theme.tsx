import { type JSX, type PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './global-style';

const theme = {
  colors: {
    lightBlue: '#86ebf8',
    blue: '#02b1c8',
    darkBlue: '#01586f',
    pink: '#f44336',
    white: '#fff',
    black: '#000',
    grey: '#808080',
    lightGrey: '#cdcdcd',
    lime: '#d2e054',
    green: '#64bc46',
  },
  fonts: {
    roboto: 'Roboto, sans-serif',
    neucha: 'Neucha, cursive',
  },
};

const Theme = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export { Theme };
export type ThemeDefault = typeof theme;
