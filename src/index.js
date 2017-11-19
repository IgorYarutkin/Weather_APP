import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import './index.css';
import reducers from './reducers';
import App from './components/App/App';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const activeCity = localStorage.getItem('activeCity') || 'Moscow';
const cities = localStorage.getItem('cities') || ['Moscow', 'Cheboksary'];
const storeWithMiddleware = createStoreWithMiddleware(reducers, {city: { activeCity, cities }})
storeWithMiddleware.subscribe( () => {
  const state = storeWithMiddleware.getState();
  localStorage.setItem('activeCity', state.city.activeCity);
  localStorage.setItem('fetchTime', state.weather.fetchTime);
} );
window.debugStore = storeWithMiddleware;

ReactDOM.render(
  <Provider store={storeWithMiddleware}>
    <App />
  </Provider>
  , document.getElementById('root'));
