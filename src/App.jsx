import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import RouterApp from './config/router';
import withRoot from './WithRoot';
import MobxProvider from './stores/Provider';

const App = () => {
  return (
    <MobxProvider>
      <CssBaseline />
      <RouterApp />
    </MobxProvider>
  );
};

export default withRoot(App);
