import { FETCH_WEATHER } from "../actions/actionTypes";

const initialState = {
  dt: null,
  summary: null,
  fetchTime: null
}

export default function(state = initialState, action) {

  switch (action.type) {
    case FETCH_WEATHER:
      const fetchData = action.payload.data;
      let fetchTime = new Date();
      fetchTime = fetchTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      const summary = {
        icon: fetchData.weather[0].icon,
        humidity: fetchData.main.humidity,
        pressure: fetchData.main.pressure,
        wind: fetchData.wind.speed,
        temper: fetchData.main.temp,
        descriptionShort: fetchData.weather[0].main,
        description: fetchData.weather[0].descriptionб
      }

      return {
        ...state,
        dt: fetchData.dt,
        summary: summary,
        fetchTime
      };

    default:
      break;
  }

  return state;
}