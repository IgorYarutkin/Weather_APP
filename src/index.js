import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import './index.css';
import Root from './components/Root/Root';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
console.log('Store: ', store.getState())

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
