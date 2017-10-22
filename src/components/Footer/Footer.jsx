import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <div className='Footer__copyright'>2017&#169; Яруткин Игорь</div>
        <div className='Footer__source'>Данные о погоде взяты из <a className='Footer__source-link' href='https://openweathermap.org'>OpenWeatherMap</a></div>
      </div>
    );
  }
}

export default Footer;