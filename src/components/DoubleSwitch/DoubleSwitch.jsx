import React, { Component } from 'react';
import shortId from 'shortid';
import classNames from 'classnames';

import './DoubleSwitch.css';

class DoubleSwitch extends Component {
  renderButton(item, onSelect) {
    const buttonClass = classNames('DoubleSwitch__button',{
      'DoubleSwitch__button_state_active': item.active
    })
    return (
      <button
        className={buttonClass}
        key={shortId.generate()}
        type='button'
        onClick={() => onSelect(item.value)}
      >
        {item.title}
      </button>
    );
  }

  render() {
    const { items, onSelect } = this.props;

    return (
      <div className='DoubleSwitch'>
        {items.map(item => this.renderButton(item, onSelect))}
      </div>
    );
  }
}

export default DoubleSwitch; 
