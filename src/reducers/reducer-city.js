import * as R from 'ramda';
import { CHANGE_CITY, SELECT_CITY, DELETE_CITY } from '../actions/actionTypes';

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

        case SELECT_CITY:
          return {
            ...state,
            cities: [
              ...state.cities,
              action.payload.city
            ]
          }

          case DELETE_CITY:
          return {
            ...state,
            cities: R.filter(item => item !== action.payload.city, state.cities)
          }

        default:
  }

  return state;
}

export default city;
