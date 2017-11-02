import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import './index.css';
import reducers from './reducers';
import App from './components/App/App';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const storeWithMiddleware = createStoreWithMiddleware(reducers)
window.debugStore = storeWithMiddleware;

ReactDOM.render(
  <Provider store={storeWithMiddleware}>
    <App />
  </Provider>
  , document.getElementById('root'));
