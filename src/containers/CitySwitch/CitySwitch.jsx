import React, { Component } from 'react';
import { string, func, bool,   arrayOf } from 'prop-types';
import cx from 'classnames';
import id from 'shortid';
import { connect } from 'react-redux';
import { changeCity, fetchWeather, changeModal, citySwitch } from '../../actions';
import Modal from '../Modal/Modal';
import SitySelect from '../CitySelect/CitySelect';

import './CitySwitch.css';

// ToDo Сделать активный класс элементу списка городов для активного города
class CitySwitch extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.props.onCitySwitchShow(true);
  }

  render() {
    const {
      cities,
      activeCity,
      onChangeCity,
      onRefresh,
      onAddCity,
      isModalOpened,
      isCitySwitchOpened,
      onCitySwitchShow
    } = this.props;

    const renderCity = (city) => {
      const onCityClick = () => {
        onChangeCity(city);
        onCitySwitchShow(false);
        onRefresh(city);
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
          {'CitySwitch_isOpened': isCitySwitchOpened}
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
              <Modal header='Выберите город'>
                <SitySelect />
              </Modal>
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
  onChangeCity: func,
  onRefresh: func,
  onAddCity: func,
  isModalOpened: bool,
  isCitySwitchOpened: bool,
  onCitySwitchShow: func
}

CitySwitch.defaultProps = {
  activeCity: 'Moscow',
}

const mapStateToProps = (state) => {
  const { activeCity, cities } = state.city
  const { isModalOpened } = state.modal
  const { isCitySwitchOpened } = state.citySwitch

  return { activeCity, cities, isModalOpened, isCitySwitchOpened }
}

const mapDispatchToProps = dispatch => ({
    onChangeCity: city => dispatch(changeCity(city)),
    onRefresh: (city) => dispatch(fetchWeather(city)),
    onAddCity: (state) => dispatch(changeModal(state)),
    onCitySwitchShow: (state) => dispatch(citySwitch(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(CitySwitch);
