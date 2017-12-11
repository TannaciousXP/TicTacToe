import { NEW_BOARD, BOARD_SIZE } from '../actions';

const intialBoard = [];

for (let i = 0; i < 9; i++) {
  intialBoard.push('');
}

export default function (state = intialBoard, action) {
  switch (action.type) {
    case NEW_BOARD:
      return action.payload;
    case BOARD_SIZE:
      return action.payload;
    default:
      return state;
  }
}
