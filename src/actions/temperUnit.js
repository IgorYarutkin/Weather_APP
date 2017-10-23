import { CHANGE_TEMPER_UNIT } from './actionTypes';

export const changeTemperUnit = temperUnit => {
  return {
    type: CHANGE_TEMPER_UNIT,
    payload: { temperUnit }
  }
}