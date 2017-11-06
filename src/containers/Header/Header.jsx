import React, { Component } from 'react';
import { number } from 'prop-types';
import { connect } from 'react-redux';
import LangSwitch from '../LangSwitch/LangSwitch';
import TemperUnitSwitch from '../TemperUnitSwitch/TemperUnitSwitch';
import GeoSwitch from '../../components/GeoSwitch/GeoSwitch';

import './Header.css';

let currentDate = new Date();
currentDate = currentDate.valueOf();

class Header extends Component {
  formatDateToString(date) {
    const myDate = date ? new Date(date) : new Date();
    return (
      myDate.toLocaleString("ru", {day: "numeric", month: "long"})
    );
  }

  formatTimeToString(time) {
    const myTime = new Date(time);
    return (
      myTime.toLocaleTimeString('ru', {hour: '2-digit', minute:'2-digit'})
    )
  }

  render() {
    const {
      dt
    } = this.props

    const weatherDataDateStamp = <span>{this.formatDateToString(dt * 1000)}, {this.formatTimeToString(dt * 1000)}</span>

    return (
      <div className='Header'>
        <div className='Header__geoswitch'>
          <GeoSwitch />
        </div>
        <div className='Header__date'>{dt ? weatherDataDateStamp : this.formatDateToString()}</div>
        <div className='Header__switches'>
          <div className='Header__switch'>
            {<TemperUnitSwitch />}
          </div>
          <div className='Header__switch'>
            {<LangSwitch />}
          </div>
          </div>
      </div>
    );
  }
}

Header.PropTypes = {
  date: number,
  dt: number
}

Header.defaultProps = {
  date: currentDate
}

const mapStateToProps = state => {
  const { weather } = state;
  const dt = weather.dt;

  return { dt };
};

export default connect(mapStateToProps)(Header);


/*
  formatDateToString(date) {
    const myDate = new Date(myStore.date);
    return (
      myDate.toLocaleString("ru", {day: "numeric", month: "long"})
    );
  }


  <div className='Header__date'>{this.formatDateToString(date)}</div>
*/