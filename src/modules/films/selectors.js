import { createSelector } from 'reselect'

const filmsIdsSelector = state => state.films.allFilms || {}
const favouriteIdsSelector = state => state.favouriteIDs || []

export const filmsListSelector = createSelector(
    filmsIdsSelector,
    items => Object.values(items)
)

export const favouriteFilmsSelector = createSelector(
    filmsListSelector,
    favouriteIdsSelector,
    (items, favourites) => items.filter((film)=> favourites.includes(film.idIMDB))
)

