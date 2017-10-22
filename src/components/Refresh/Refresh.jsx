import React, { Component } from 'react';

import './Refresh.css';

import refresh from './refresh.svg'

class Refresh extends Component {
  render() {
    return (
      <div className='Refresh'>
        <div className='Refresh__time'>23:54</div>
        <div className='Refresh__wrap'>
          {<img src={refresh} className='Refresh__icon' alt='refresh' width='20' height='20' />}
        </div>
      </div>
    );
  }
}

export default Refresh; 
