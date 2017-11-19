import { SHOW_CITY_SWITCH } from './actionTypes';

export const showCitySwitch = citySwitch => {
  return {
    type: SHOW_CITY_SWITCH,
    payload: { citySwitch }
  }
}