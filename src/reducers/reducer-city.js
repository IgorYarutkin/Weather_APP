import { CHANGE_CITY, SELECT_CITY } from '../actions/actionTypes';

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
          console.log('action.payload: ', action.payload.city);
          return {
            ...state,
            cities: [
              ...state.cities,
              action.payload.city
            ]
          }

        default:
  }

  return state;
}

export default city;
