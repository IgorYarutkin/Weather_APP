import React, { Component } from 'react';
import { string, number, oneOf, oneOfType } from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import Refresh from '../../containers/Refresh/Refresh';

import './Main.css';

class Main extends Component {

  render() {
    const {
      dt,
      icon,
      wind,
      windDeg,
      temper,
      temperMin,
      temperMax,
      pressure,
      humidity,
      currentTemperUnit,
      description
    } = this.props

    const temperSignCelsius = dt ? <span>&#8451;</span> : '';
    const temperSignFarenheit = dt ? <span>&#8457;</span> : '';
    let temperFull, temperShort, temperMin_, temperMax_;

    if (typeof(temper) === 'number') {
      temperFull = _.round(currentTemperUnit === 'celsius' ? temper : temper * 9 / 5 + 32, 1);
      temperShort = _.round(temperFull);
      temperMin_ = _.round(currentTemperUnit === 'celsius' ? temperMin : temperMin * 9 / 5 + 32, 1);
      temperMax_ = _.round(currentTemperUnit === 'celsius' ? temperMax : temperMax * 9 / 5 + 32, 1);
    } else {
      temperShort = temper; 
      temperFull = temper;
      temperMin_ = temperMin;
      temperMax_ = temperMax;
    }

    return (
      <div className='Main'>
        <div className='Main__summary'>
          <div className='Main__summary-left'>
            <div className='Main__summary-item'>
              <img
                src={`http://openweathermap.org/img/w/${icon}.png`}
                className='Main__summary-icon'
                alt='icon'
              />
            </div>
            <div className='Main__summary-item'>{ description }</div>
            <div className='Main__summary-item'>{ pressure } мм.рт.ст.</div>
          </div>
          <div className='Main__temperature'>
              <div className='Main__temperature-wrap'>
                <span className='Main__temperature-figure'>{ temperShort > 0 ? `+${temperShort}` : temperShort }</span>
                <span className='Main__temperature-unicode'>{currentTemperUnit === 'celsius' ? temperSignCelsius: temperSignFarenheit}</span>
              </div>
          </div>
          <div className='Main__summary-right'>
            <div className='Main__summary-item'>{ humidity } %</div>
            <div className='Main__summary-item'>{wind} м/с</div>
            <div className='Main__refresh'>
              <Refresh />
            </div>
          </div>
        </div>
        <div className='Main__column Main__column_3'>
          <div className='Main__column-line'>
            <span>Температура сейчас:</span>
            <span>{ temperFull > 0 ? `+${temperFull}` : temperFull } {currentTemperUnit === 'celsius' ? temperSignCelsius: temperSignFarenheit}</span>
          </div>
          <div className='Main__column-line'>
            <span>Минимальная температура:</span>
            <span>{temperMin_ > 0 ? `+${temperMin_}` : temperMin_} {currentTemperUnit === 'celsius' ? temperSignCelsius: temperSignFarenheit}</span>
          </div>
          <div className='Main__column-line'>
            <span>Максимальная температура:</span>
            <span>{temperMax_ > 0 ? `+${temperMax_}` : temperMax_} {currentTemperUnit === 'celsius' ? temperSignCelsius: temperSignFarenheit}</span>
          </div>
          <div className='Main__column-line'>
            <span>Влажность:</span>
            <span>{ humidity } %</span>
          </div>
        </div>
        <div className='Main__column Main__column_3'>
          <div className='Main__column-line'>
            <span>Давление:</span>
            <span>{pressure} мм.рт.ст.</span>
          </div>
          <div className='Main__column-line'>
            <span>Ветер:</span>
            <span>{ wind } м/с</span>
          </div>
          <div className='Main__column-line'>
            <span>Направление:</span>
            <span>{ windDeg } &#176;</span>
          </div>
          <div className='Main__column-line'>
            <span>Облачность:</span>
            <span>75%</span>
          </div>
        </div>
        <div className='Main__column Main__column_3'>
          <div className='Main__column-line'>
            <span>Осадки:</span>
            <span>дождь</span>
          </div>
          <div className='Main__column-line'>
            <span>Восход:</span>
            <span>05:35</span>
          </div>
          <div className='Main__column-line'>
            <span>Закат:</span>
            <span>21:34</span>
          </div>
          <div className='Main__column-line'>
            <span>Продолжительность дня:</span>
            <span>15:59</span>
          </div>
        </div>

      </div>
    );
  }
}

Main.PropType = {
  icon: string,
  temper: oneOfType([ number, string ]),
  temperMin: oneOfType([ number, string ]),
  temperMax: oneOfType([ number, string ]),
  pressure: oneOfType([ number, string ]),
  humidity: oneOfType([ number, string ]),
  wind: oneOfType([ number, string ]),
  windDeg: oneOfType([ number, string ]),
  currentTemperUnit: oneOf(['ru', 'eng']),
  description: string,
}

Main.defaultProps = {
  icon: '02d',
  temper: 'N/A',
  temperMin: 'N/A',
  temperMax: 'N/A',
  description: 'N/A',
  pressure: '--',
  wind: '--',
  windDeg: '--',
  humidity: '--'
}

const mapStateToProps = (state) => {
  const { weather, temperUnit } = state;
  const temper = weather.summary ? weather.summary.temper : undefined;
  const temperMin = weather.summary ? weather.summary.temperMin : undefined;
  const temperMax = weather.summary ? weather.summary.temperMax : undefined;
  const icon = weather.summary ? weather.summary.icon : undefined;
  const pressure = weather.summary ? weather.summary.pressure : undefined;
  const humidity = weather.summary ? weather.summary.humidity : undefined;
  const wind = weather.summary ? weather.summary.wind : undefined;
  const windDeg = weather.summary ? weather.summary.windDeg : undefined;
  const description = weather.summary ? weather.summary.description : undefined;
  const { currentTemperUnit } = temperUnit;
  const dt = weather.dt;

  return (
    {
      dt,
      temper,
      temperMin,
      temperMax,
      icon,
      pressure,
      humidity,
      wind,
      windDeg,
      currentTemperUnit,
      description,
    }
  )
}

export default connect(mapStateToProps)(Main); 

// Для перевода температуры из шкалы Цельсия в шкалу Фаренгейта нужно умножить исходное число на 9/5 и прибавить 32.
// 1 hPa = 0.75006375541921 mmHg