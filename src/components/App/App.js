import React, { Component } from 'react';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App__wrapper'>
          <div className='App__header'>
            <Header />
          </div>
          <div className='App__main'>
            <Main />
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
