import { CHANGE_TEMPER_UNIT } from '../actions/actionTypes';

const initialState = {
  temperUnits: {
    celsius: 'C',
    farenheit: 'F'
  },
  currentTemperUnit: 'celsius'
}

const temperUnit = (state = initialState, action) => {
  switch (action.type) {
      case CHANGE_TEMPER_UNIT:
          return {
              ...state,
              currentTemperUnit: action.payload.temperUnit
          }
        default:
  }

  return state;
}

export default temperUnit;