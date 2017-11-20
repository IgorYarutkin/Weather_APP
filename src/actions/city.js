import { CHANGE_CITY, SELECT_CITY, DELETE_CITY } from './actionTypes';

export const changeCity = city => {
  return {
    type: CHANGE_CITY,
    payload: { city }
  }
}

export const selectCity = city => {
  return {
    type: SELECT_CITY,
    payload: { city }
  }
}

export const deleteCity = city => {
  return {
    type: DELETE_CITY,
    payload: { city }
  }
}
