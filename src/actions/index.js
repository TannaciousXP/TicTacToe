export const NUM_PLAYERS = 'NUM_PLAYERS';

// Have no functions
export const PLAYER1_NAME = 'PLAYER1';
export const PLAYER2_NAME = 'PLAYER2';
export const WINNER = 'WINNER';
export const CURR_TURN = 'CURR_TURN';
export const BOARD_SIZE = 'BOARD_SIZE';
export const GAME_IN_PROGRESS = 'GAME_IN_PROGRESS';
export const TURN_COUNT = 'TURN_COUNT';

export const namePlayer1 = function namePlayer1(name) {
  console.log(name);
};

export const numPlayers = function numPlayers(num) {
  return {
    type: NUM_PLAYERS,
    payload: JSON.parse(num),
  };
};

