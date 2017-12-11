export const NUM_PLAYERS = 'NUM_PLAYERS';
export const PLAYER1_NAME = 'PLAYER1';
export const PLAYER2_NAME = 'PLAYER2';
export const FIRST_TURN = 'FIRST_TURN';
export const NEXT_TURN = 'NEXT_TURN';
export const BOARD_SIZE = 'BOARD_SIZE';
export const NEW_BOARD = 'NEW_BOARD';

// Have no functions
export const WINNER = 'WINNER';
export const GAME_IN_PROGRESS = 'GAME_IN_PROGRESS';
export const GAME_OVER = 'GAME_OVER';
export const TURN_COUNT = 'TURN_COUNT';

// Get Turn Count
export const turnCount = function turnCount(count) {
  return {
    type: TURN_COUNT,
    payload: count,
  };
};

// Is Game in Progress => true
export const gameInProgress = function gameInProgress() {
  return {
    type: GAME_IN_PROGRESS,
    payload: true,
  };
};

// Is Game in Progress => false
export const gameOver = function gameOver() {
  return {
    type: GAME_OVER,
    payload: false,
  };
};

// Initial Board
export const firstBoard = function firstBoard(boardSize) {
  const intialBoard = Array(boardSize === '' ? 9 : JSON.parse(boardSize) * JSON.parse(boardSize));

  return {
    type: BOARD_SIZE,
    payload: intialBoard,
  };
};

// New Board
export const newBoard = function newBoard(newBoard) {
  return {
    type: NEW_BOARD,
    payload: newBoard,
  };
};


// Get First pick
export const firstPick = function firstPick(pick) {
  return {
    type: FIRST_TURN,
    payload: pick === '' ? 'X' : pick,
  };
};

// Get the next nextTurn
export const nextTurn = function nextTurn(currTurn) {
  return {
    type: NEXT_TURN,
    payload: currTurn === 'X' ? 'O' : 'X',
  };
};

// Name player 1
export const namePlayer1 = function namePlayer1(name) {
  return {
    type: PLAYER1_NAME,
    payload: name === '' ? 'Player 1' : name,
  };
};

// Name player2
export const namePlayer2 = function namePlayer2(name) {
  return {
    type: PLAYER2_NAME,
    payload: name === '' ? 'Player 2' : name,
  };
};

// Get number of players
export const numPlayers = function numPlayers(num) {
  return {
    type: NUM_PLAYERS,
    payload: JSON.parse(num),
  };
};

