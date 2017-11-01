import { CHANGE_CITY, ADD_CITY } from '../actions/actionTypes';

const initialState = {
    cities: [],
    currentCity: 'geoposition'
  }

const city = (state = initialState, action) => {
  switch (action.type) {
      case CHANGE_CITY:
          return {
              ...state,
              currentCity: action.payload.city
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
