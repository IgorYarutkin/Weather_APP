import React, { Component } from 'react';
import { number } from 'prop-types';
import LangSwitch from '../../containers/LangSwitch/LangSwitch';
import TemperUnitSwitch from '../../containers/TemperUnitSwitch/TemperUnitSwitch';
import GeoSwitch from '../GeoSwitch/GeoSwitch';

import './Header.css';

let currentDate = new Date();
currentDate = currentDate.valueOf();
console.log(currentDate);

class Header extends Component {
  formatDateToString(date) {
    const myDate = new Date(date);
    return (
      myDate.toLocaleString("ru", {day: "numeric", month: "long"})
    );
  }

  render() {
    const {
      date
    } = this.props

    return (
      <div className='Header'>
        <div className='Header__geoswitch'>
          <GeoSwitch />
        </div>
        <div className='Header__date'>{this.formatDateToString(date)}</div>
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
  date: number
}

Header.defaultProps = {
  date: currentDate
}

export default Header;


/*
  formatDateToString(date) {
    const myDate = new Date(myStore.date);
    return (
      myDate.toLocaleString("ru", {day: "numeric", month: "long"})
    );
  }
*/