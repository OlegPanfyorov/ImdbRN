import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import { rootReducer, rootSaga } from './modules';

const sagaMiddleware = createSagaMiddleware();

function configMiddleware() {
  let middleware = [];

  middleware.push(sagaMiddleware);

  if (__DEV__) {
    middleware.push(logger);
  }

  return middleware;
}

export default () => {
  let store = createStore(
    rootReducer,
    compose(applyMiddleware(...configMiddleware())),
  );

  sagaMiddleware.run(rootSaga);

  let persistor = persistStore(store);
  return { store, persistor };
};
