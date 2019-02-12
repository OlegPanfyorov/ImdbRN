import { createSelector } from 'reselect';

const filmsSelector = state => state.films.allFilms || {};
const favouriteIdsSelector = state => state.films.favouriteIDs || [];
const sortingSelector = state => state.films.sortingType || '';

export const filmsListSelector = createSelector(
  filmsSelector,
  items => Object.values(items),
);

export const favouriteFilmsSelector = createSelector(
  filmsSelector,
  favouriteIdsSelector,
  sortingSelector,
  (items, favourites, type) => {
    let favouriteFilms = favourites.map(id => items[id]);
    switch (type) {
      case 'By Title': //TODO: can be optimized and not hardcoded
        return favouriteFilms.sort((a, b) => a.title.localeCompare(b.title));
      case 'By Year':
        return favouriteFilms.sort((a, b) => a.year - b.year);
      default:
        return favouriteFilms;
    }
  },
);

export const chartDataSelector = createSelector(
  filmsSelector,
  items => Object.values(items),
);
