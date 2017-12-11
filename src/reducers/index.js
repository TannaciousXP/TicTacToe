import { combineReducers } from 'redux';

import numPlayers from './reducer_numPlayers';

// import reducers

const rootReducer = combineReducers({
  numPlayers,
  player1: '',
  player2: '',
  piecesOnBoard: [],
  turnCount: 0,
  currentTurn: '',

});

export default rootReducer;
