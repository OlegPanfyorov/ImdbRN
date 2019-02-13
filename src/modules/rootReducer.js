import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import filmsReducer from './films/reducer';

const primary = {
  key: 'root',
  storage,
  // whitelist: ['films']
};

export default persistReducer(
  primary,
  combineReducers({
    films: filmsReducer,
  }),
);
