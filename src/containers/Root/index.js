import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Router from 'router';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router />
      </Provider>
    );
  }
}
