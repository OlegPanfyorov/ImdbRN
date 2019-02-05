import { all } from 'redux-saga/effects';

import filmsRootSaga from './films/sagas';

function* rootSaga() {
  yield all([filmsRootSaga()]);
}

export default rootSaga;
