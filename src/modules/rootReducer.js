import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import filmsReducer from './films/reducer';

const persistConfig = {
  key: 'root',
  storage,
  timeout: 120000,
};

export default persistReducer(
  persistConfig,
  combineReducers({
    films: filmsReducer,
  }),
);
