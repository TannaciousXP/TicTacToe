import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import numPlayers from './reducer_numPlayers';
import player1 from './reducer_player1Name';
import player2 from './reducer_player2Name';
import playerTurn from './reducer_currTurn';
import boardPieces from './reducer_boardSize';
import count from './reducer_turnCount';
import gameProgress from './reducer_gameInProgress';

const rootReducer = combineReducers({
  numberOfPlayers: numPlayers,
  player1Name: player1,
  player2Name: player2,
  currTurn: playerTurn,
  board: boardPieces,
  turnCount: count,
  isGameInProgress: gameProgress,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
);

export default store;
