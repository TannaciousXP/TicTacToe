import { combineReducers } from 'redux';

// import reducers

const rootReducer = combineReducers({
  player1: '',
  player2: '',
  piecesOnBoard: [],
  turnCount: 0,
  currentTurn: '',

});

export default rootReducer;
