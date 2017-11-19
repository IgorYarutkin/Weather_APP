import React, { Component } from 'react'
import { func, node } from 'prop-types'
import { connect } from 'react-redux';
import { changeModal } from '../../actions';

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
  }

  onClickPrevent(event) {
    event.stopImmediatePropagation()
  }

  render() {
    const {
      children
    } = this.props

    return (
      <div className='Modal'>
        <div className='Modal__wrapper' onClick={this.onClick} role='button'>
          <div className='Modal__body' onClick={(event) => {event.stopPropagation()}} role='button'>
            <div className='Modal__header'>
              <h3>Введите название города</h3>
            </div>
            <div className='Modal__content'>
              <input className='Modal__input' type='text' placeholder='Введите название города' />
              <button className='Modal__button' type='button'>Добавить</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Modal.PropType = {
  onClose: func,
  children: node
}
 
const mapDispatchToProps = dispatch => ({
  onClose: (state) => dispatch(changeModal(state))
});

export default connect(null, mapDispatchToProps)(Modal); 