import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  reducers from './utils/reducers';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers'
import {Provider} from 'react-redux'
import promiseMiddleware from 'redux-promise'

const storeWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

const store = createStore(allReducers);

ReactDOM.render(

  <Provider store = {storeWithMiddleware(reducers)} >
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
