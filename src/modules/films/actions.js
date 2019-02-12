export const FILMS_LOAD = 'FILMS_LOAD';
export const FILMS_LOADED = 'FILMS_LOADED';
export const FILM_ADD_TO_FAVOURITES = 'FILM_ADD_TO_FAVOURITES';
export const FILM_REMOVE_FROM_FAVOURITES = 'FILM_REMOVE_FROM_FAVOURITES';
export const FILMS_UPDATE_SORTING = 'FILMS_UPDATE_SORTING';

export function loadFilms() {
  return {
    type: FILMS_LOAD,
  };
}

export function saveFilms(films) {
  return {
    type: FILMS_LOADED,
    payload: films,
  };
}

export function addFilmToFavourites(id) {
  return {
    type: FILM_ADD_TO_FAVOURITES,
    payload: id,
  };
}

export function removeFilmFromFavourites(id) {
  return {
    type: FILM_REMOVE_FROM_FAVOURITES,
    payload: id,
  };
}

export function updateFilmsSorting(id) {
  return {
    type: FILMS_UPDATE_SORTING,
    payload: id,
  };
}
