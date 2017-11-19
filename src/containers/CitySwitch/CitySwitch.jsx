import React, { Component } from 'react';
import { string, func, bool,   arrayOf } from 'prop-types';
import cx from 'classnames';
import id from 'shortid';
import { connect } from 'react-redux';
import Modal from '../Modal/Modal';
import { changeCity, fetchWeather, changeModal } from '../../actions';

import './CitySwitch.css';

class CitySwitch extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpened: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    const {
      cities,
      activeCity,
      onCityChange,
      onRefresh,
      onAddCity,
      isModalOpened
    } = this.props;

    const { isOpened } = this.state;

    const renderCity = (city) => {
      const onCityClick = () => {
        onCityChange(city);
        this.setState({ isOpened: !this.state.isOpened });
        onRefresh(city)
      };
      return (
        <li className='CitySwitch__city-item' key={id.generate()}>
          <button className='CitySwitch__city' type='button' onClick={onCityClick}>
            <span className='CitySwitch__city-name'>
              {city}
            </span>
          </button>
        </li>
      )
    }

    const addCity = () => {
      console.log('Добавить город');
      onAddCity(true);
    }

    return (
      <div
        className={cx(
          'CitySwitch', 
          {'CitySwitch_isOpened': isOpened}
        )}
      >
          <div className='CitySwitch__cities'>
            <div className='CitySwitch__activeCity'>
              {activeCity}
            </div>
            <ul className='CitySwitch__cities-list'>
              {cities.map(renderCity)}
              <li className='CitySwitch__city-item' key={id.generate()}>
                <button className='CitySwitch__city' type='button' onClick={addCity}>
                  <span className='CitySwitch__city-name'>
                    Добавить город
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div className='CitySwitch__wrapper-button'>
            <button
              className='CitySwitch__button'
              type='button'
              onClick={this.onClick}
            >
            </button>
          </div>
          { isModalOpened &&
            <div className='CitySwitch__modal'>
              <Modal />
            </div>
          }
        </div>
    );
  }
}


CitySwitch.propType = {
  cities: arrayOf(string),
  activeCity: string,
  onChangeActiveCity: func,
  onCityChange: func,
  onRefresh: func,
  onAddCity: func,
  isModalOpened: bool
}

CitySwitch.defaultProps = {
  activeCity: 'Moscow',
}

const mapStateToProps = (state) => {
  const { activeCity, cities } = state.city
  const { isModalOpened } = state.modal

  return { activeCity, cities, isModalOpened }
}

const mapDispatchToProps = dispatch => ({
    onCityChange: city => dispatch(changeCity(city)),
    onRefresh: (city) => dispatch(fetchWeather(city)),
    onAddCity: (state) => dispatch(changeModal(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(CitySwitch);
