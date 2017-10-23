import { combineReducers } from 'redux';
import lang from './reducer-lang';
import temperUnit from './reducer-temper-unit';

const reducers = combineReducers({
  lang,
  temperUnit
})

export default reducers;