import { Redirect, Route } from 'react-router-dom';

import React from 'react';
import RoutePath from '../lib/RoutePath';

let PrivateRoute = (props) => {
  let { component: Component, authorized, ...rest } = props;
  return (
    <Route
      {...rest}
      component={(props) =>
        authorized ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: RoutePath.loginPath,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
