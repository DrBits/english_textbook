import React from 'react';
import ReactDOM from 'react-dom';

import initialState from './store/initialState';
import configureStore from './store/configureStore';

import Root from './containers/Root';

import * as serviceWorker from './serviceWorker';

const store = configureStore(initialState);
const root = window.document.createElement('div');

window.document.body.insertBefore(root, window.document.body.firstChild);

ReactDOM.render(<Root store={store} />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
