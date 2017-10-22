import React, { Component } from 'react';
import { number } from 'prop-types';
import DoubleSwitch from '../DoubleSwitch/DoubleSwitch';
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
            <DoubleSwitch
              items={[
                {title: 'С', active: true},
                {title: 'F'}
              ]}
            />
          </div>
          <div className='Header__switch'>
            <DoubleSwitch
              items={[
                {title: 'РУС', active: true},
                {title: 'ENG'}
              ]}
            />
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