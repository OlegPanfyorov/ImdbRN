import { all, takeLatest, call, put } from 'redux-saga/effects';
import Api from '../../api';
import { FILMS_LOAD, saveFilms } from './actions';

function* loadFilmsSaga() {
  try {
    const response = yield call(Api.loadFilms);

    console.log(response);

    yield put(saveFilms(response.films)); //TODO:
  } catch (e) {
    console.log(e);
    // alert(e.message); //TODO:
  }
}

function* rootSaga() {
  yield all([takeLatest(FILMS_LOAD, loadFilmsSaga)]);
}

export default rootSaga;
