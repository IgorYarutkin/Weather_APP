import React, { Component } from 'react';
import shortId from 'shortid';
import classNames from 'classnames';

import './DoubleSwitch.css';

class DoubleSwitch extends Component {
  renderButton(item) {
    const buttonClass = classNames('DoubleSwitch__button',{
      'DoubleSwitch__button_state_active': item.active
    })
    return (
      <button className={buttonClass} key={shortId.generate()} type='button'>{item.title}</button>
    );
  }

  render() {
    const { items } = this.props;

    return (
      <div className='DoubleSwitch'>
        {items.map(this.renderButton)}
      </div>
    );
  }
}

export default DoubleSwitch; 
