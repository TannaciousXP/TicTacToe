import { PLAYER2_NAME } from '../actions';

// import actions from '../actions';
// const { NUM_PLAYERS } = actions;


export default function (state = 'Player 2', action) {
  switch (action.type) {
    case PLAYER2_NAME:
      return action.payload;
    default:
      return state;
  }
}
