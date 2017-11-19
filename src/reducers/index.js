import { combineReducers } from 'redux';
import lang from './reducer-lang';
import temperUnit from './reducer-temper-unit';
import city from './reducer-city';
import weather from './reducer-weather';
import modal from './reducer-modal';
import citySwitch from './reducer-citySwitch'

const reducers = combineReducers({
  lang,
  temperUnit,
  city,
  weather,
  modal,
  citySwitch
})

export default reducers;