import { createSelector } from 'reselect';

const filmsSelector = state => state.films.allFilms || {};
const favouriteIdsSelector = state => state.films.favouriteIDs || [];

export const filmsListSelector = createSelector(
  filmsSelector,
  items => Object.values(items),
);

export const favouriteFilmsSelector = createSelector(
  filmsSelector,
  favouriteIdsSelector,
  (items, favourites) => favourites.map(id => items[id]),
);

export const chartDataSelector = createSelector(
  filmsSelector,
  items => Object.values(items),
);
