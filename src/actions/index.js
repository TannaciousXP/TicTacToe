export const NUM_PLAYERS = 'num_players';

// const numPlayers = num => ({
//   type: NUM_PLAYERS,
//   payload: num,
// });

export const numPlayers = function (num) {
  return {
    type: NUM_PLAYERS,
    payload: num,
  };
};

// action type follow by function
// export default {
//   NUM_PLAYERS,
//   numPlayers,
// };

