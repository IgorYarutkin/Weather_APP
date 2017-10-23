import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root/Root';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
window.debugStore = store;

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
