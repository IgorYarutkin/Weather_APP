import React, { Component } from 'react';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

import './App.css';

import API_RESPOND from './App.json'

const myStore = {
  "api": {

  },
  "date": (() => Date.now())(),
  "lang": "rus"
}

class App extends Component {
  formatDateToString(date) {
    const myDate = new Date(myStore.date);
    return (
      myDate.toLocaleString("ru", {day: "numeric", month: "long"})
    );
  }

  render() {
    return (
      <div className='App'>
        <div className='App__wrapper'>
          <div className='App__header'>
            <Header date={this.formatDateToString(myStore.date)} />
          </div>
          <div className='App__main'>
            <Main icon='02d'/>
          </div>
          <div className='App__footer'>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App; 
