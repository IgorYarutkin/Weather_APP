import { CHANGE_CITY, ADD_CITY } from '../actions/actionTypes';

const initialState = {
    cities: [],
    activeCity: 'Cheboksary'
  }

const city = (state = initialState, action) => {
  switch (action.type) {
      case CHANGE_CITY:
          return {
              ...state,
              activeCity: action.payload.city
          }

        case ADD_CITY:
          return [
            ...state,
            action.payload.city
          ]

        default:
  }

  return state;
}

export default city;
