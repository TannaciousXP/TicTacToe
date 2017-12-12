import boardSizeReducer from '../reducers/reducer_boardSize';
import currTurnReducer from '../reducers/reducer_currTurn';
import gameInProgressReducer from '../reducers/reducer_gameInProgress';
import gameStartReducer from '../reducers/reducer_gameStart';
import isGomeOnReducer from '../reducers/reducer_isGameOn';
import nextStepsReducer from '../reducers/reducer_nextSteps';
import numPlayersReducer from '../reducers/reducer_numPlayers';
import player1Reducer from '../reducers/reducer_player1Name';
import player2Reducer from '../reducers/reducer_player2Name';
import turnCountReducer from '../reducers/reducer_turnCount';
import winnerReducer from '../reducers/reducer_winner';
import { NEW_BOARD } from '../actions/index';

describe('Board size reducer', () => {
  const intialBoard = [];

  for (let i = 0; i < 9; i++) {
    intialBoard.push('');
  }

  it('should return the initial state', () => {
    expect(boardSizeReducer(undefined, {})).toEqual(intialBoard);
  });

  const newBoard = ['X', 'O', 'X', 'O', 'O', 'X', 'X', 'O', 'X'];
  const action = {
    type: NEW_BOARD,
    payload: newBoard,
  };

  it('should return new board', () => {
    expect(boardSizeReducer(undefined, action)).toEqual(newBoard);
  });
});

