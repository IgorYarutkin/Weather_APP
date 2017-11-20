import React, { Component } from 'react'
import { func, node, string } from 'prop-types'
import { connect } from 'react-redux';
import { changeModal, citySwitch } from '../../actions';

import './Modal.css'

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpened: false };
    this.onClick = this.onClick.bind(this);
  }


  onClick() {
    this.state = { isOpened: false };
    this.props.onClose(false);
    this.props.onCitySwitchShow(false);
  }

  onClickPrevent(event) {
    event.stopImmediatePropagation()
  }

  render() {
    const {
      header,
      children
    } = this.props

    return (
      <div className='Modal'>
        <div className='Modal__wrapper' onClick={this.onClick} role='button'>
          <div className='Modal__body' onClick={(event) => {event.stopPropagation()}} role='button'>
            <button className='Modal__close' type='button' onClick={this.onClick}></button>
            <div className='Modal__header'>
              <h3>
                {header}
              </h3>
            </div>
            <div className='Modal__content'>
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Modal.PropType = {
  onClose: func,
  onCitySwitchShow: func,
  children: node,
  header: string
}
 
const mapDispatchToProps = dispatch => ({
  onClose: (state) => dispatch(changeModal(state)),
  onCitySwitchShow: (state) => dispatch(citySwitch(state))
});

export default connect(null, mapDispatchToProps)(Modal); 