import { NEXT_STEPS } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case NEXT_STEPS:
      return action.payload;
    default:
      return state;
  }
}
