import React from 'react';
import { Provider } from 'mobx-react';

// Stores
import signUp from './signUp';

export default ({ children }) => (
  <Provider
    // Add here all the stores
    signUpStore={signUp}
  >
    {children}
  </Provider>
);
