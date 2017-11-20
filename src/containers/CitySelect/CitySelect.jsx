import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { selectCity, changeCity, changeModal, citySwitch, fetchWeather } from '../../actions';

import './CitySelect.css';

class CitySelect extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInput = this.onInput.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.cityInput).focus()
  }

  onInput(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    const {
      onSelectCity,
      onChangeCity,
      onClose,
      onCitySwitchShow,
      onRefresh
    } = this.props;
    // Добавить диспатчи для запроса данных о погоде
    // Sankt-Peterburg
    // this.props.fetchWeather(this.state.term);
    onSelectCity(this.state.term);
    onChangeCity(this.state.term);
    this.setState({ term: '' });
    onClose(false);
    onCitySwitchShow(false);
    onRefresh(this.state.term);
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
          ref='cityInput'
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
  onChangeCity: func,
  onRefresh: func
}

CitySelect.defaultProps = {
}

const mapDispatchToProps = dispatch => ({
  onSelectCity: (city) => dispatch(selectCity(city)),
  onChangeCity: city => dispatch(changeCity(city)),
  onClose: (state) => dispatch(changeModal(state)),
  onCitySwitchShow: (state) => dispatch(citySwitch(state)),
  onRefresh: (city) => dispatch(fetchWeather(city))
})

export default connect(null, mapDispatchToProps)(CitySelect);


/*
var TestInput = React.createClass({
componentDidMount: function() { //ставим фокус в input
ReactDOM.findDOMNode(this.refs.myTestInput).focus();
},
*/