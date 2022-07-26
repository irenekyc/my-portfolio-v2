import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore, applyMiddleware} from 'redux'
import allReducers from './reducers'
import {Provider } from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

let initialState = {}
const middleware = [thunk]
const store = createStore(allReducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
