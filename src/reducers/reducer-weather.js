import { FETCH_WEATHER } from "../actions/actionTypes";

export default function(state = {}, action) {

  switch (action.type) {
    case FETCH_WEATHER:
      const fetchData = action.payload.data;
      let fetchTime = new Date();
      fetchTime = fetchTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      const sunrise = fetchData.sys.sunrise;
      const sunset = fetchData.sys.sunset;
      const rain = fetchData.rain ? 'дождь' : fetchData.rain;
      const snow = fetchData.snow ? 'снег' : fetchData.snow;
      const summary = {
        icon: fetchData.weather[0].icon,
        humidity: fetchData.main.humidity,
        pressure: fetchData.main.pressure,
        clouds: fetchData.clouds.all,
        wind: fetchData.wind.speed,
        windDeg: fetchData.wind.deg,
        temper: fetchData.main.temp,
        temperMax: fetchData.main.temp_max,
        temperMin: fetchData.main.temp_min,
        description: fetchData.weather[0].description,
        rain,
        snow
      }

      return {
        ...state,
        dt: fetchData.dt,
        summary,
        fetchTime,
        sunrise,
        sunset
      };

    default:
      break;
  }

  return state;
}