import { FIRST_TURN, NEXT_TURN } from '../actions';

export default function (state = 'X', action) {
  switch (action.type) {
    case FIRST_TURN:
      return action.payload;
    case NEXT_TURN:
      return action.payload;
    default:
      return state;
  }
}
