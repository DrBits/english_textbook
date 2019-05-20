import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RoutePublic = ({
  component: Component,
  isAuthenticated,
  to,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Redirect to={to} /> : <Component {...props} />
    }
  />
);

RoutePublic.defaulProps = {
  to: '/private'
};

export default RoutePublic;
