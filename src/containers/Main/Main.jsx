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
      temper,
      pressure,
      humidity,
      currentTemperUnit,
      descriptionShort,
      description
    } = this.props

    const temperSignCelsius = dt ? <span>&#8451;</span> : '';
    const temperSignFarenheit = dt ? <span>&#8457;</span> : '';
    let temperFull, temperShort;

    if (typeof(temper) === 'number') {
      temperFull = _.round(currentTemperUnit === 'celsius' ? this.props.temper : this.props.temper * 9 / 5 + 32, 1);
      temperShort = _.round(temperFull);
    } else {
      temperShort = temper; 
      temperFull = temper;
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
            <div className='Main__summary-item'>{ descriptionShort }</div>
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
          <div className='Main__column-line'>{ description }</div>
          <div className='Main__column-line'>
            <span>Температура сейчас:</span>
            <span>{ temperFull > 0 ? `+${temperFull}` : temperFull }</span>
          </div>
          <div className='Main__column-line'>
            <span>Минимальная температура:</span>
            <span>+15</span>
          </div>
          <div className='Main__column-line'>
            <span>Максимальная температура:</span>
            <span>+27 &#8451;</span>
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
            <span>270</span>
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
  pressure: oneOfType([ number, string ]),
  humidity: oneOfType([ number, string ]),
  wind: oneOfType([ number, string ]),
  currentTemperUnit: oneOf(['ru', 'eng']),
  description: string,
  descriptionShort: string
}

Main.defaultProps = {
  icon: '02d',
  temper: 'N/A',
  descriptionShort: 'N/A',
  description: 'Нет данных',
  pressure: '--',
  wind: '--',
  humidity: '--'
}

const mapStateToProps = (state) => {
  const { weather, temperUnit } = state;
  const temper = weather.summary ? weather.summary.temper : undefined;
  const icon = weather.summary ? weather.summary.icon : undefined;
  const pressure = weather.summary ? weather.summary.pressure : undefined;
  const humidity = weather.summary ? weather.summary.humidity : undefined;
  const wind = weather.summary ? weather.summary.wind : undefined;
  const descriptionShort = weather.summary ? weather.summary.descriptionShort : undefined;
  const description = weather.summary ? weather.summary.description : undefined;
  const { currentTemperUnit } = temperUnit;
  const dt = weather.dt;

  return (
    {
      dt,
      temper,
      icon,
      pressure,
      humidity,
      wind,
      currentTemperUnit,
      description,
      descriptionShort
    }
  )
}

export default connect(mapStateToProps)(Main); 

// Для перевода температуры из шкалы Цельсия в шкалу Фаренгейта нужно умножить исходное число на 9/5 и прибавить 32.
// 1 hPa = 0.75006375541921 mmHg