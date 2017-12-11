import { NEW_BOARD, BOARD_SIZE } from '../actions';

export default function (state = Array(9), action) {
  switch (action.type) {
    case NEW_BOARD:
      return action.payload;
    case BOARD_SIZE:
      return action.payload;
    default:
      return state;
  }
}
