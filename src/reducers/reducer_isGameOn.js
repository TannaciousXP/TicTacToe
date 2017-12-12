import { START_GAME, END_GAME } from '../actions';

export default function (state = false, action) {
  switch (action.type) {
    case START_GAME:
      return action.payload;
    case END_GAME:
      return action.payload;
    default:
      return state;
  }
}
