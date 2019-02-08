import { FILMS_LOADED, FILM_ADDED, FILM_REMOVED } from './actions';

const initialState = { films: [], favourites: [] };

function reducer(state = initialState, action) {
  switch (action.type) {
    case FILMS_LOADED:
      return action.payload;
    case FILM_ADDED:
      return action.payload;
    case FILM_REMOVED:
      return action.payload;
    default:
      return state;
  }

  return state;
}

export default reducer;
