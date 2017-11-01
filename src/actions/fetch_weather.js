import axios from 'axios';
import { FETCH_WEATHER } from './actionTypes';

const lang = 'ru';

const API_KEY = '026fb0d6a4fd13d72d840bcbffecc297';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&lang=${lang}`
export default function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url)
    .then(function (response) {
      console.log('Weather data :', response.data);
      return {
        type: FETCH_WEATHER,
        payload: request
      }
    })
    .catch(function (error) {
      console.log('error: ', error);
    });
}