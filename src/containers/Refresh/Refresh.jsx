import React, { Component } from 'react';
import { string, func } from 'prop-types';
import { connect } from  'react-redux';
import { fetchWeather } from '../../actions';

import './Refresh.css';

import refresh from './refresh.svg'

class Refresh extends Component {
  render() {
    const {
      fetchTime,
      activeCity,
      onRefresh
    } = this.props;

    return (
      <div className='Refresh'>
        <div className='Refresh__time'>{ fetchTime }</div>
        <button
          className='Refresh__button'
          type='button'
          onClick={ () => { onRefresh(activeCity) } }
        >
          {<img src={refresh} className='Refresh__icon' alt='refresh' width='20' height='20' />}
        </button>
      </div>
    );
  }
}

Refresh.PropType = {
  fetchTime: string,
  onRefresh: func,
  activeCity: string
}

Refresh.defaultProps = {
  fetchTime: '--'
}

const mapStateToProps = (state) => {
  const { fetchTime } = state.weather;
  const { activeCity  } = state.city;
  return { fetchTime, activeCity };
}

const mapDispatchToProps = dispatch => ({
  onRefresh: (city) => dispatch(fetchWeather(city))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Refresh)



/* API_KEY = 026fb0d6a4fd13d72d840bcbffecc297

api.openweathermap.org/data/2.5/weather?id=524901&APPID=026fb0d6a4fd13d72d840bcbffecc297
*/