import React, { Component } from 'react';
import fetchWeather from '../../actions/fetch_weather';

import './Refresh.css';

import refresh from './refresh.svg'

class Refresh extends Component {

  render() {
    return (
      <div className='Refresh'>
        <div className='Refresh__time'>23:54</div>
        <button className='Refresh__button' onClick={fetchWeather} type='button' >
          {<img src={refresh} className='Refresh__icon' alt='refresh' width='20' height='20' />}
        </button>
      </div>
    );
  }
}

export default Refresh; 

/* API_KEY = 026fb0d6a4fd13d72d840bcbffecc297

api.openweathermap.org/data/2.5/weather?id=524901&APPID=026fb0d6a4fd13d72d840bcbffecc297
1 hPa = 0.75006375541921 mmHg

*/