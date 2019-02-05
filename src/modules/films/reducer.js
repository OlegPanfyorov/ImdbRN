import { FILMS_LOAD, FILMS_LOADED } from "./actions";

const initialState = {films: [], favourites: []};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FILMS_LOADED:
      return action.payload
    default:
      return state;
  }

  return state;
}

export default reducer;
