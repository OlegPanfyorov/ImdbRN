import { combineReducers } from 'redux';
import { persistReducer, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import filmsReducer from './films/reducer';

const config = {
  key: 'root',
  storage,
};

export default persistCombineReducers(config, { films: filmsReducer });
