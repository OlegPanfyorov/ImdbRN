export const FILMS_LOAD = 'FILMS_LOAD';
export const FILMS_LOADED = 'FILMS_LOADED';
export const ADDING_FILM_TO_FAVOURITES = 'ADDING_FILM_TO_FAVOURITES';
export const REMOVING_FROM_FAVOURITES = 'REMOVING_FROM_FAVOURITES';
export const FILM_ADDED = 'FILM_ADDED';
export const FILM_REMOVED = 'FILM_REMOVED';

export function saveFilms(films) {
  return {
    type: FILMS_LOADED,
    payload: films,
  };
}

export function filmAddedToFavourites(favourites) {
  return {
    type: FILM_ADDED,
    payload: favourites,
  };
}

export function filmRemovedFromFavourites(favourites) {
  return {
    type: FILM_REMOVED,
    payload: favourites,
  };
}

export function loadFilms() {
  return {
    type: FILMS_LOAD,
  };
}

export function addFilmToFavourites(id) {
  return {
    type: ADDING_FILM_TO_FAVOURITES,
  };
}

export function removeFilmFromFavourites(id) {
  return {
    type: REMOVING_FROM_FAVOURITES,
  };
}
