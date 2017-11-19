import { SHOW_MODAL } from '../actions/actionTypes';

const initialState = {
    isModalOpened: false
  }

const modal = (state = initialState, action) => {
  switch (action.type) {
      case SHOW_MODAL:
          return {
              ...state,
              isModalOpened: action.payload.modal
          }

        default:
  }

  return state;
}

export default modal;
