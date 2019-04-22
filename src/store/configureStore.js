import { createStore, applyMiddleware, compose } from 'redux';

import reducers from 'reducers';

let middlewares = [];

const getEnhancer = () => {
  let devTools = f => f;

  // eslint-disable-next-line no-undef
  if (!IS_PROD && window.devToolExtension) {
    devTools = window.devToolExtension();
  }

  return compose(
    applyMiddleware(...middlewares),
    devTools
  );
};

export default initialState => {
  const store = createStore(reducers, initialState, getEnhancer());

  if (module.hot) {
    module.hot.accept(require('reducers').default);
  }

  return store;
};
