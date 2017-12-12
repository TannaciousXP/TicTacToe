import { WINNER } from '../actions';

export default function (state = '', action) {
  switch (action.type) {
    case WINNER:
      return action.payload;
    default:
      return state;
  }
}
