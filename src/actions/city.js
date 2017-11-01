import { CHANGE_CITY } from './actionTypes';

export const changeCity = city => {
  return {
    type: CHANGE_CITY,
    payload: { city }
  }
}