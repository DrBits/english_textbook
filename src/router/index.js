import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import { createBrowserHistory } from 'history';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import RoutePublic from './RoutePublic';
import RoutePrivate from './RoutePrivate';

import AppWrapper from '../containers/AppWrapper';
import Main from '../containers/Main';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import SystemAlerts from '../containers/SystemAlerts';

import Home from '../routes/Home';
import Private from '../routes/Private';
import NotFound from '../routes/NotFound';

const history = createBrowserHistory();

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

class Root extends Component {
  render() {
    const { dispatch, user } = this.props;

    return (
      <Router history={history}>
        <MuiThemeProvider theme={theme}>
          <AppWrapper logged={user.isAuthenticated}>
            <Helmet
              defer={false}
              htmlAttributes={{ lang: 'en' }}
              encodeSpecialCharacters
            />
            {user.isAuthenticated && <Header dispatch={dispatch} user={user} />}
            <Main isAuthenticated={user.isAuthenticated}>
              <Switch>
                <RoutePublic
                  isAuthenticated={user.isAuthenticated}
                  path="/"
                  exact
                  component={Home}
                />
                <RoutePrivate
                  isAuthenticated={user.isAuthenticated}
                  path="/private"
                  component={Private}
                />
                <Route component={NotFound} />
              </Switch>
            </Main>
            <Footer />
            <SystemAlerts />
          </AppWrapper>
        </MuiThemeProvider>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Root);
