import { all, take } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist/lib/constants';

import filmsRootSaga from './films/sagas';

function* rootSaga() {
  yield take(REHYDRATE); // Wait for rehydrate to prevent sagas from running with empty store
  yield all([filmsRootSaga()]);
}

export default rootSaga;
