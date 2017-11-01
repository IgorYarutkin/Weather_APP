import { combineReducers } from 'redux';
import lang from './reducer-lang';
import temperUnit from './reducer-temper-unit';
import city from './reducer-city';

const reducers = combineReducers({
  lang,
  temperUnit,
  city
})

export default reducers;