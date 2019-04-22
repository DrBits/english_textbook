import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Authorize from 'containers/Authorize/Authorize';

class BaseRouter extends Component {
  routes = {
    path: '/',
    indexRoute: {
      onEnter: (nextState, replace) => this.onEnter(nextState, replace)
    },
    childRoutes: [
      {
        path: 'authorize',
        component: Authorize,
        onEnter: (nextState, replace) => this.onEnter(nextState, replace)
      }
    ]
  };

  onEnter = (nextState, replace) => {
    const nextPathName = nextState.location.pathname;
    const { authorized, userId } = this.props;

    if (!authorized && nextPathName !== 'authorize') {
      replace({
        pathname: '/authorize',
        state: nextPathName
      });
    } else if (
      authorized &&
      (nextPathName === '/' || nextPathName === '/authorize')
    ) {
      replace({
        pathname: `/${userId}`,
        state: nextPathName
      });
    }
  };
  render() {
    return <Router routes={this.routes} />;
  }
}

const mapStateToProps = ({ routing }) => ({
  routing: routing.locationBeforeTransitions
});

export default connect(mapStateToProps)(BaseRouter);
