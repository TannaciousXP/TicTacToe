export const NUM_PLAYERS = 'NUM_PLAYERS';
export const PLAYER1_NAME = 'PLAYER1';
export const PLAYER2_NAME = 'PLAYER2';
export const FIRST_TURN = 'FIRST_TURN';
export const NEXT_TURN = 'NEXT_TURN';
export const BOARD_SIZE = 'BOARD_SIZE';
export const NEW_BOARD = 'NEW_BOARD';
export const START_GAME = 'START_GAME';
export const END_GAME = 'END_GAME';
export const GAME_IN_PROGRESS = 'GAME_IN_PROGRESS';
export const GAME_OVER = 'GAME_OVER';
export const TURN_COUNT = 'TURN_COUNT';
export const WINNER = 'WINNER';
export const NEXT_STEPS = 'NEXT_STEPS';

// Have no functions

// Check winner
let winner;
export const checkForWinner = function checkForWinner(board) {
  const length = Math.sqrt(board.length);

  // check rows
  for (let row = 0; row < length; row += 1) {
    winner = null;
    for (let col = 0; col < length; col += 1) {
      const player = board[(row * length) + col];
      if (!player) {
        winner = null;
        break;
      } else if (!winner) {
        winner = player;
      } else if (player !== winner) {
        winner = null;
        break;
      }
      if (col === 2 && winner !== null) {
        return winner;
      }
    }
  }

  // check columns
  for (let row = 0; row < length; row += 1) {
    winner = null;
    for (let col = 0; col < length; col += 1) {
      const player = board[(col * length) + row];
      if (!player) {
        winner = null;
        break;
      } else if (!winner) {
        winner = player;
      } else if (player !== winner) {
        winner = null;
        break;
      }
      if (col === 2 && winner !== null) {
        return winner;
      }
    }
  }

  // check diagonal start top left => bottom right
  for (let row = 0; row < length; row += 1) {
    const player = board[row * (length + 1)];
    if (!player) {
      winner = null;
      break;
    } else if (!winner) {
      winner = player;
    } else if (player !== winner) {
      winner = null;
      break;
    }
  }
  if (winner) return winner;

  // check diagonal start top right => bottom left
  for (let row = 0; row < length; row += 1) {
    const player = board[(row * (length - 1)) + (length - 1)];
    if (!player) {
      winner = null;
      break;
    } else if (!winner) {
      winner = player;
    } else if (player !== winner) {
      winner = null;
      break;
    }
  }
  return winner !== null ? winner : null;
};

// Insert into matrix
export const insertIntoSlot = function insertIntoSlot(idx, currTurn, board) {
  const boardCopy = [...board];
  boardCopy[idx] = currTurn;
  const winningPlayer = checkForWinner(boardCopy);
  const nextPlayer = currTurn === 'X' ? 'O' : 'X';
  return {
    type: NEXT_STEPS,
    payload: {
      winningPlayer,
      boardCopy,
      nextPlayer,
    },
  };
};

// Save Winner
export const saveWinner = function saveWinner(winnerName) {
  return {
    type: WINNER,
    payload: winnerName,
  };
};


// Get Turn Count
export const turnCount = function turnCount(count) {
  return {
    type: TURN_COUNT,
    payload: count,
  };
};

// StartGame
export const startGame = function startGame() {
  return {
    type: START_GAME,
    payload: true,
  };
};

// END GAME
export const endGame = function endGame() {
  return {
    type: END_GAME,
    payload: false,
  };
};


// Is Game in Progress => true
export const gameInProgress = function gameInProgress() {
  winner = null;
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
  const intialBoard = [];

  for (let i = 0; i < (boardSize === '' ? 9 : JSON.parse(boardSize) * JSON.parse(boardSize)); i += 1) {
    intialBoard.push('');
  }

  return {
    type: BOARD_SIZE,
    payload: intialBoard,
  };
};

// New Board
export const newBoard = function newBoard(updatedBoard) {
  return {
    type: NEW_BOARD,
    payload: updatedBoard,
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

