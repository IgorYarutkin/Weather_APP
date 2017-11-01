import React, { Component } from 'react';
import { number } from 'prop-types';
import LangSwitch from '../../containers/LangSwitch/LangSwitch';
import TemperUnitSwitch from '../../containers/TemperUnitSwitch/TemperUnitSwitch';
import GeoSwitch from '../GeoSwitch/GeoSwitch';

import './Header.css';

class Header extends Component {
  render() {
    const {
      date
    } = this.props

    return (
      <div className='Header'>
        <div className='Header__geoswitch'>
          <GeoSwitch />
        </div>
        <div className='Header__date'>{date}</div>
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

export default Header;