import { NUM_PLAYERS } from '../actions';

export default function (action, state = {}) {
  switch (action.type) {
    case NUM_PLAYERS:
      return action.payload;
    default:
      return state;
  }
}
