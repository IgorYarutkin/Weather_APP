import { combineReducers } from 'redux';
import lang from './reducer-lang';
import temperUnit from './reducer-temper-unit';
import city from './reducer-city';
import weather from './reducer-weather';

const reducers = combineReducers({
  lang,
  temperUnit,
  city,
  weather
})

export default reducers;