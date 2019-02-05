export const FILMS_LOAD = 'FILMS_LOAD';
export const FILMS_LOADED = 'FILMS_LOADED';

export function saveFilms(films) {
  return {
    type: FILMS_LOADED,
    payload: films
  };
}

export function loadFilms() {
  return {
    type: FILMS_LOAD,
  };
}
