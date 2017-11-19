import { SHOW_CITY_SWITCH } from '../actions/actionTypes';

const initialState = {
    isCitySwitchOpened: false
  }

const citySwitch = (state = initialState, action) => {
  switch (action.type) {
      case SHOW_CITY_SWITCH:
          return {
              ...state,
              isCitySwitchOpened: action.payload.citySwitch
          }

        default:
  }

  return state;
}

export default citySwitch;
