import boardSizeReducer from '../reducers/reducer_boardSize';
import currTurnReducer from '../reducers/reducer_currTurn';
import gameInProgressReducer from '../reducers/reducer_gameInProgress';
import isGomeOnReducer from '../reducers/reducer_isGameOn';
import nextStepsReducer from '../reducers/reducer_nextSteps';
import numPlayersReducer from '../reducers/reducer_numPlayers';
import player1Reducer from '../reducers/reducer_player1Name';
import player2Reducer from '../reducers/reducer_player2Name';
import turnCountReducer from '../reducers/reducer_turnCount';
import winnerReducer from '../reducers/reducer_winner';

import {
  NEW_BOARD,
  NEXT_TURN,
  GAME_IN_PROGRESS,
  GAME_OVER,
  START_GAME,
  END_GAME,
  NEXT_STEPS,
  NUM_PLAYERS,
  PLAYER1_NAME,
  PLAYER2_NAME,
  TURN_COUNT,
  WINNER,
} from '../actions/index';

// Board reducer
describe('Board size reducer', () => {
  it('should return the initial state', () => {
    const intialBoard = [];

    for (let i = 0; i < 9; i++) {
      intialBoard.push('');
    }
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

// Turn reducer
describe('Current turn reducer', () => {
  it('should return the initial state', () => {
    expect(currTurnReducer(undefined, {})).toEqual('X');
  });

  it('should return new turn', () => {
    const action = {
      type: NEXT_TURN,
      payload: 'O',
    };
    expect(currTurnReducer(undefined, action)).toEqual('O');
  });
});

// Game Reducer
describe('Game in progress reducer', () => {
  it('should return the initial state', () => {
    expect(gameInProgressReducer(undefined, {})).toEqual(false);
  });

  it('should return true', () => {
    const action = {
      type: GAME_IN_PROGRESS,
      payload: true,
    };
    expect(gameInProgressReducer(undefined, action)).toEqual(true);
  });

  it('should return false', () => {
    const action = {
      type: GAME_OVER,
      payload: false,
    };
    expect(gameInProgressReducer(undefined, action)).toEqual(false);
  });
});

// GameStart
describe('Game on reducer', () => {
  it('should return the initial state', () => {
    expect(isGomeOnReducer(undefined, {})).toEqual(false);
  });

  it('should return true', () => {
    const action = {
      type: START_GAME,
      payload: true,
    };
    expect(isGomeOnReducer(undefined, action)).toEqual(true);
  });

  it('should return false', () => {
    const action = {
      type: END_GAME,
      payload: false,
    };
    expect(isGomeOnReducer(undefined, action)).toEqual(false);
  });
});

// nextStep reducer
describe('Next step reducer', () => {
  it('should return the initial state', () => {
    expect(nextStepsReducer(undefined, {})).toEqual({});
  });

  it('should return true', () => {
    const payload = {
      board: ['X', 'O', 'X'],
    };
    const action = {
      type: NEXT_STEPS,
      payload,
    };
    expect(nextStepsReducer(undefined, action)).toEqual(payload);
  });
});

// number players reducer
describe('Number of players reducer', () => {
  it('should return the initial state', () => {
    expect(numPlayersReducer(undefined, {})).toEqual(-1);
  });

  it('should return 2', () => {
    const action = {
      type: NUM_PLAYERS,
      payload: 2,
    };
    expect(numPlayersReducer(undefined, action)).toEqual(2);
  });
});

// Player 1 reducer
describe('Player 1 reducer', () => {
  it('should return the initial state', () => {
    expect(player1Reducer(undefined, {})).toEqual('Player 1');
  });

  it('should return Peter', () => {
    const action = {
      type: PLAYER1_NAME,
      payload: 'Peter',
    };
    expect(player1Reducer(undefined, action)).toEqual('Peter');
  });
});

// Player 2 reducer
describe('Player 2 reducer', () => {
  it('should return the initial state', () => {
    expect(player2Reducer(undefined, {})).toEqual('Computer');
  });

  it('should return Peter', () => {
    const action = {
      type: PLAYER2_NAME,
      payload: 'Peter',
    };
    expect(player2Reducer(undefined, action)).toEqual('Peter');
  });
});

// Turn count reducer
describe('Turn count reducer', () => {
  it('should return the initial state', () => {
    expect(turnCountReducer(undefined, {})).toEqual(0);
  });

  it('should return 2', () => {
    const action = {
      type: TURN_COUNT,
      payload: 2,
    };
    expect(turnCountReducer(undefined, action)).toEqual(2);
  });
});

// Winner reducer
describe('Turn count reducer', () => {
  it('should return the initial state', () => {
    expect(winnerReducer(undefined, {})).toEqual('');
  });

  it('should return Peter', () => {
    const action = {
      type: WINNER,
      payload: 'Peter',
    };
    expect(winnerReducer(undefined, action)).toEqual('Peter');
  });
});
