export const NUM_PLAYERS = 'NUM_PLAYERS';
export const PLAYER1_NAME = 'PLAYER1';
export const PLAYER2_NAME = 'PLAYER2';
export const FIRST_TURN = 'FIRST_TURN';
export const NEXT_TURN = 'NEXT_TURN';
export const BOARD_SIZE = 'BOARD_SIZE';
export const NEW_BOARD = 'NEW_BOARD';
export const GAME_IN_PROGRESS = 'GAME_IN_PROGRESS';
export const GAME_OVER = 'GAME_OVER';
export const TURN_COUNT = 'TURN_COUNT';

// Have no functions
export const WINNER = 'WINNER';


let winner;
export const checkForWinner = function checkForWinner(board) {
  const length = Math.sqrt(board.length);

  for (let row = 0; row < length; row += 1) {
    // reset winner at each row
    winner = null;
    for (let col = 0; col < length; col += 1) {
      const player = board[(row * length) + col];
      if (!player) {
        winner = null;
        break;
      } else if (!winner) {
        winner = player;
      } else if (player != winner) {
        winner = null;
        break;
      }
      if (col === 2 && winner !== null) {
        // if there is check to see if the three are equal
        return winner;
      }
    }
  }

  // check columns
  for (let row = 0; row < length; row += 1) {
    // reset winner at each column
    winner = null;
    // push into the players turn
    for (let col = 0; col < length; col += 1) {
      const player = board[(col * length) + row];
      if (!player) {
        winner = null;
        break;
      } else if (!winner) {
        winner = player;
      } else if (player != winner) {
        winner = null;
        break;
      }
      if (col === 2 && winner !== null) {
        return winner;
      }
    }
  }

  // check diagonal 1 - 0 4 8
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

  // check diagonal 2 - 2 4 6
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


// Get Turn Count
export const turnCount = function turnCount(count) {
  return {
    type: TURN_COUNT,
    payload: count,
  };
};

// Is Game in Progress => true
export const gameInProgress = function gameInProgress(bool = true) {
  winner = null;
  return {
    type: GAME_IN_PROGRESS,
    payload: bool,
  };
};

// Is Game in Progress => false
export const gameOver = function gameOver(bool = false) {
  return {
    type: GAME_OVER,
    payload: bool,
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

