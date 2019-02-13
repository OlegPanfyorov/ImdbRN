import {
  FILMS_LOADED,
  FILM_ADD_TO_FAVOURITES,
  FILM_REMOVE_FROM_FAVOURITES,
  FILMS_UPDATE_SORTING,
} from './actions';

const initialState = { allFilms: {}, favouriteIDs: [], sortingType: null };

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
      if (state.favouriteIDs.includes(action.payload)) {
        return { ...state };
      } else {
        return {
          ...state,
          favouriteIDs: [...state.favouriteIDs, action.payload],
        };
      }
    case FILM_REMOVE_FROM_FAVOURITES:
      let favouritesToRemove = state.favouriteIDs;
      return {
        ...state,
        favouriteIDs: favouritesToRemove.filter(id => id != action.payload),
      };
    case FILMS_UPDATE_SORTING:
      return {
        ...state,
        sortingType: action.payload,
      };
    default:
      return { ...state };
  }
}

export default reducer;
