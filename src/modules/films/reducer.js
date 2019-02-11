import {
  FILMS_LOADED,
  FILM_ADD_TO_FAVOURITES,
  FILM_REMOVE_FROM_FAVOURITES,
} from './actions';

const initialState = { allFilms: {}, favouriteIDs: [] };

function reducer(state = initialState, action) {
  switch (action.type) {
    case FILMS_LOADED:
      let convertedFilms = {};
      action.payload.forEach(element => {
        convertedFilms[element.idIMDB] = element;
      });
      return {
        allFilms: convertedFilms,
        favouriteIDs: state.favouriteIDs,
      };
    case FILM_ADD_TO_FAVOURITES:
      let favouritesToAdd = state.favouriteIDs;
      favouritesToAdd.push(action.payload);
      return { ...state, favouriteIDs: favouritesToAdd };
    case FILM_REMOVE_FROM_FAVOURITES:
      let favouritesToRemove = state.favouriteIDs;
      return {
        ...state,
        favouriteIDs: favouritesToRemove.filter(id => id != action.payload),
      };
    default:
      return { ...state };
  }
}

export default reducer;
