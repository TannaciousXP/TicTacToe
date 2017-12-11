import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import numPlayers from './reducer_numPlayers';


const rootReducer = combineReducers({
  numberOfPlayers: numPlayers,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
);

export default store;
