import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { selectCity, changeCity } from '../../actions';

import './CitySelect.css';

class CitySelect extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInput = this.onInput.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInput(event) {
    this.setState({ term: event.target.value });
    console.log('Ввод символов: ', this.state.term)
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log('Submit');
    // Добавить диспатчи для добавления города в хранилище, смены активного города
    // и закрытия модалки + Sankt-Peterburg
    // this.props.fetchWeather(this.state.term);
    this.props.onSelectCity(this.state.term);
    this.props.onChangeCity(this.state.term);
    this.setState({ term: '' });
  }

  render() {

    return (
      <form
        className='CitySelect'
        onSubmit={this.onFormSubmit}
      >
        <input
          className='CitySelect__input'
          type='text'
          placeholder='Введите название города'
          value={this.state.term}
          onInput={this.onInput}
        />
        <button
          className='CitySelect__button'
          type='submit'
        >
          Добавить
        </button>
      </form>
    );
  }
}


CitySelect.propType = {
  onSelectCity: func,
  onChangeCity: func
}

CitySelect.defaultProps = {
}

const mapDispatchToProps = dispatch => ({
  onSelectCity: (city) => dispatch(selectCity(city)),
  onChangeCity: city => dispatch(changeCity(city))
})

export default connect(null, mapDispatchToProps)(CitySelect);
