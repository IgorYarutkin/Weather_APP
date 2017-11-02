import { FETCH_WEATHER } from "../actions/actionTypes";

export default function(state, action) {
  console.log('weather-reducer action: ', action);

  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload, ...state];

    default:
      break;
  }

  return state;
}