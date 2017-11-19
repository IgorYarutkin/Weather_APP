import { SHOW_MODAL } from './actionTypes';

export const changeModal = modal => {
  return {
    type: SHOW_MODAL,
    payload: { modal }
  }
}