import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalCss from './assets/style/global';
import { colors } from './config/constants';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e43f6f',
      contrastText: '#000000',
    },
    secondary: {
      main: '#12fbd2',
      contrastText: '#000000',
    },
    ...colors,
  },
  typography: {
    useNextVariants: true,
  },
});

export default (Component) => {
  const WithRoot = (props) => {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalCss />
        <Component {...props} />
      </MuiThemeProvider>
    );
  };

  return WithRoot;
};
