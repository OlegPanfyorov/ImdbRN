import { all, take } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist/lib/constants';

import filmsRootSaga from './films/sagas';

function* rootSaga() {
  console.log("Waiting for rehydration")
  yield take(REHYDRATE); // Wait for rehydrate to prevent sagas from running with empty store
  console.log("Rehydrated")
  yield all([filmsRootSaga()]);
}

export default rootSaga;
