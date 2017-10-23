import React, { Component } from 'react';
import { string } from 'prop-types';
import Refresh from '../Refresh/Refresh';

import './Main.css';

class Main extends Component {
  iconSrc = `http://openweathermap.org/img/w/${this.props.icon}.png`;

  render() {
    return (
      <div className='Main'>
        <div className='Main__summary'>
          <div className='Main__summary-left'>
            <div className='Main__summary-item'>
              <img src={this.iconSrc} className='Main__summary-icon' alt='icon' />
            </div>
            <div className='Main__summary-item'>Облачно</div>
            <div className='Main__summary-item'>765мм.рт.ст.</div>
          </div>
          <div className='Main__temperature'>
              <div className='Main__temperature-wrap'>
                <span className='Main__temperature-sign'>+</span>
                <span className='Main__temperature-figure'>18</span>
                <span className='Main__temperature-unicode'>&#8451;</span>
              </div>
          </div>
          <div className='Main__summary-right'>
            <div className='Main__summary-item'>90%</div>
            <div className='Main__summary-item'>3-5 м/с</div>
            <div className='Main__refresh'>
              <Refresh />
            </div>
          </div>
        </div>
        <div className='Main__column Main__column_3'>
          <div className='Main__column-line'>Переменная облачность. Преимущественно без осадков</div>
          <div className='Main__column-line'>
            <span>Температура сейчас:</span>
            <span>+25 &#8451;</span>
          </div>
          <div className='Main__column-line'>
            <span>Минимальная температура:</span>
            <span>+15 &#8451;</span>
          </div>
          <div className='Main__column-line'>
            <span>Максимальная температура:</span>
            <span>+27 &#8451;</span>
          </div>
        </div>
        <div className='Main__column Main__column_3'>
          <div className='Main__column-line'>
            <span>Давление:</span>
            <span>765мм.рт.ст.</span>
          </div>
          <div className='Main__column-line'>
            <span>Ветер:</span>
            <span>3-5 м/с</span>
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
  icon: string
}

export default Main; 
