import { all, takeLatest, call, put } from 'redux-saga/effects';
import Api from '../../api';
import { FILMS_LOAD, saveFilms } from './actions';

function* loadFilmsSaga() {
  try {
    const response = yield call(Api.loadFilms);
    const res = yield response.json()
    const { data: { movies = [] } = {} } = res
    yield put(saveFilms(movies));
  } catch (e) {
    console.log(e);
    // alert(e.message);
  }
}

function* rootSaga() {
  yield all([takeLatest(FILMS_LOAD, loadFilmsSaga)]);
}

export default rootSaga;
