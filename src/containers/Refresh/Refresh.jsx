import React, { Component } from 'react';
import { string } from 'prop-types';
import { connect } from  'react-redux';
import { fetchWeather } from '../../actions';

import './Refresh.css';

import refresh from './refresh.svg'

class Refresh extends Component {
  render() {
    const { fetchTime } = this.props;
    console.log(fetchTime);

    return (
      <div className='Refresh'>
        <div className='Refresh__time'>{ fetchTime }</div>
        <button
          className='Refresh__button'
          type='button'
          onClick={this.props.onClick}
        >
          {<img src={refresh} className='Refresh__icon' alt='refresh' width='20' height='20' />}
        </button>
      </div>
    );
  }
}

Refresh.PropType = {
  fetchTime: string
}

Refresh.defaultProps = {
  fetchTime: '--'
}

const mapStateToProps = (state) => {
  /*const { weather } = state;
  const { fetchTime } = weather.dt ? weather.dt : undefined;
  return { fetchTime };*/
  const fetchTime = state.weather.fetchTime;
  return { fetchTime };
}

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(fetchWeather())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Refresh)



/* API_KEY = 026fb0d6a4fd13d72d840bcbffecc297

api.openweathermap.org/data/2.5/weather?id=524901&APPID=026fb0d6a4fd13d72d840bcbffecc297
1 hPa = 0.75006375541921 mmHg

*/