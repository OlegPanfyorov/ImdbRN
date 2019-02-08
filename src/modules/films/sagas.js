import { all, takeLatest, call, put } from 'redux-saga/effects';
import Api from '../../api';
import { FILMS_LOAD, saveFilms, filmAddedToFavourites, filmRemovedFromFavourites } from './actions';
import mockedMovies from '../../api/mocks/films.json'

function* loadFilmsSaga() { 
  try {
    // const response = yield call(Api.loadFilms);
    // const res = yield response.json()
    const { data: { movies = [] } = {} } = mockedMovies
    console.log('[fetchMovies response]', movies)
    yield put(saveFilms(movies));
  } catch (e) {
    alert(e.message);
  }
}

function* addFilmToFavouritesSaga(id) {
  yield put(filmAddedToFavourites(id))
}

function* removeFilmFromFavouritesSaga(id)  
{
  yield put(filmRemovedFromFavourites(id))
}

function* rootSaga() {
  yield all([takeLatest(FILMS_LOAD, loadFilmsSaga)]);
}

export default rootSaga;
