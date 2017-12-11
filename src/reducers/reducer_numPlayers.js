import { NUM_PLAYERS } from '../actions';

// import actions from '../actions';
// const { NUM_PLAYERS } = actions;


export default function (state = -1, action) {
  switch (action.type) {
    case NUM_PLAYERS:
      return action.payload;
    default:
      return state;
  }
}
