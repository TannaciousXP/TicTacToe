import { PLAYER1_NAME } from '../actions';

// import actions from '../actions';
// const { NUM_PLAYERS } = actions;


export default function (state = 'Player 1', action) {
  switch (action.type) {
    case PLAYER1_NAME:
      return action.payload;
    default:
      return state;
  }
}
