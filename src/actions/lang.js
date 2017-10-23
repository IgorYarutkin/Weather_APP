import { CHANGE_LANG } from './actionTypes';

export const changeLang = lang => {
  return {
    type: CHANGE_LANG,
    payload: { lang }
  }
}