import { GAME_IN_PROGRESS, GAME_OVER } from '../actions';

export default function (state = false, action) {
  switch (action.type) {
    case GAME_IN_PROGRESS:
      return action.paylaod;
    case GAME_OVER:
      return action.payload;
    default:
      return state;
  }
}
