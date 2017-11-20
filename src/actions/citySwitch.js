import { SHOW_CITY_SWITCH } from './actionTypes';

export const citySwitch = citySwitch => {
  return {
    type: SHOW_CITY_SWITCH,
    payload: { citySwitch }
  }
}