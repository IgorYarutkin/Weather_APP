import React, { Component } from 'react';
import { string, number, oneOf, oneOfType } from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import Refresh from '../Refresh/Refresh';

import './Main.css';

class Main extends Component {

  render() {
    const {
      icon,
      wind,
      temper,
      pressure,
      humidity,
      currentTemperUnit,
      descriptionShort,
      description
    } = this.props

    let temperFull, temperShort;
    const temperSign = `\&#8451`;

    if (typeof(temper) === 'number') {
      temperFull = currentTemperUnit === 'celsius' ? this.props.temper : this.props.temper * 9 / 5 + 32
      temperFull = temper > 0 ? `+${temper}` : temper;
      temperShort = temper > 0 ? `+${_.round(temper)}` : _.round(temper)
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
                <span className='Main__temperature-figure'>{ temperShort }</span>
                <span className='Main__temperature-unicode'></span>
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
            <span>{ temperFull }</span>
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
  const wind = weather.summary ? weather.summary.wind : undefined;
  const descriptionShort = weather.summary ? weather.summary.descriptionShort : undefined;
  const description = weather.summary ? weather.summary.description : undefined;
  const { currentTemperUnit } = temperUnit;
  console.log(currentTemperUnit);

  return (
    { 
      temper,
      icon,
      wind,
      currentTemperUnit,
      description,
      descriptionShort
    }
  )
}

export default connect(mapStateToProps)(Main); 

// Для перевода температуры из шкалы Цельсия в шкалу Фаренгейта нужно умножить исходное число на 9/5 и прибавить 32.