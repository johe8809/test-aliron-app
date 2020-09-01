import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from '../../layouts/Main';
// Pages
import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp';

import { ROUTES } from './routes';
import { auth } from '../firebase';

const PrivateRoute = ({ component: Component, layout: Layout, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to={{ pathname: '/signup' }} />
        )
      }
    />
  );
};

export default () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact={true} path={'/signup'} component={SignUp} />
        <>
          {ROUTES.map((route, index) => (
            <PrivateRoute
              key={index}
              path={route.path}
              exact={route.exact}
              layout={MainLayout}
              component={route.component}
              isAuthenticated={isAuthenticated}
            />
          ))}
        </>
      </Switch>
    </Router>
  );
};
