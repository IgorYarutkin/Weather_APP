import React, { Component } from 'react';
import { boolean, string, number, oneOf, oneOfType } from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import Refresh from '../../containers/Refresh/Refresh';

import './Main.css';

class Main extends Component {
  formatTimeToString(time) {
    const myTime = new Date(time);
    return (
      myTime.toLocaleTimeString('ru', {hour: '2-digit', minute:'2-digit'})
    )
  }

  render() {
    const {
      dt,
      rain,
      snow,
      clouds,
      icon,
      wind,
      windDeg,
      temper,
      temperMin,
      temperMax,
      pressure,
      humidity,
      sunrise,
      sunset,
      currentTemperUnit,
      description,
      currentLang
    } = this.props

    const temperSignCelsius = dt ? <span>&#8451;</span> : '';
    const temperSignFarenheit = dt ? <span>&#8457;</span> : '';
    const precipitation = rain || snow || '--';
    const sunrise_ = sunrise ? this.formatTimeToString(sunrise * 1000) : '---';
    const sunset_ = sunset ? this.formatTimeToString(sunset * 1000) : '---';
    const dayDuration = dt ? `${_.floor(( sunset - sunrise) / 3600)}:${_.round((( sunset - sunrise) % 3600) / 60) }` : '--';
    let temperFull, temperShort, temperMin_, temperMax_, pressure_;

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


    if (typeof(pressure) === 'number') {
      pressure_ = currentLang === 'ru' ? _.round(pressure * 0.75006375541921) : pressure;
    } else {
      pressure_ = pressure;
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
            <div className='Main__summary-item'>{pressure_} { currentLang === 'ru' ? 'мм.рт.cт.' : 'hPa'}</div>
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
            <span>{pressure_} мм.рт.ст.</span>
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
            <span>{clouds} %</span>
          </div>
        </div>
        <div className='Main__column Main__column_3'>
          <div className='Main__column-line'>
            <span>Осадки:</span>
            <span>{ precipitation }</span>
          </div>
          <div className='Main__column-line'>
            <span>Восход:</span>
            <span>{ sunrise_ }</span>
          </div>
          <div className='Main__column-line'>
            <span>Закат:</span>
            <span>{ sunset_ }</span>
          </div>
          <div className='Main__column-line'>
            <span>Продолжительность дня:</span>
            <span>{ dayDuration }</span>
          </div>
        </div>

      </div>
    );
  }
}

Main.PropType = {
  snow: boolean,
  rain: boolean,
  icon: string,
  temper: oneOfType([ number, string ]),
  temperMin: oneOfType([ number, string ]),
  temperMax: oneOfType([ number, string ]),
  pressure: oneOfType([ number, string ]),
  humidity: oneOfType([ number, string ]),
  wind: oneOfType([ number, string ]),
  windDeg: oneOfType([ number, string ]),
  currentTemperUnit: oneOf(['celsius', 'farenheit']),
  currentLang: oneOf(['ru', 'eng']),
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
  humidity: '--',
  clouds: '--'
}

const mapStateToProps = (state) => {
  const { weather, temperUnit, lang } = state;
  const temper = weather.summary ? weather.summary.temper : undefined;
  const temperMin = weather.summary ? weather.summary.temperMin : undefined;
  const temperMax = weather.summary ? weather.summary.temperMax : undefined;
  const icon = weather.summary ? weather.summary.icon : undefined;
  const pressure = weather.summary ? weather.summary.pressure : undefined;
  const humidity = weather.summary ? weather.summary.humidity : undefined;
  const wind = weather.summary ? weather.summary.wind : undefined;
  const windDeg = weather.summary ? weather.summary.windDeg : undefined;
  const description = weather.summary ? weather.summary.description : undefined;
  const rain = weather.summary ? weather.summary.rain : undefined;
  const snow = weather.summary ? weather.summary.snow : undefined;
  const clouds = weather.summary ? weather.summary.clouds : undefined;
  const { currentTemperUnit } = temperUnit;
  const { dt, sunrise, sunset } = weather;
  const { currentLang } = lang;

  return (
    {
      dt,
      rain,
      snow,
      clouds,
      temper,
      temperMin,
      temperMax,
      icon,
      pressure,
      humidity,
      wind,
      windDeg,
      sunrise,
      sunset,
      currentTemperUnit,
      description,
      currentLang
    }
  )
}

export default connect(mapStateToProps)(Main); 

// Для перевода температуры из шкалы Цельсия в шкалу Фаренгейта нужно умножить исходное число на 9/5 и прибавить 32.
// 1 hPa = 0.75006375541921 mmHg