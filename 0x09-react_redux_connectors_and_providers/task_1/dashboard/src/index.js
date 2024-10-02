// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import uiReducer from './reducers/uiReducer';

// Step 1: Create the Redux store
const store = createStore(uiReducer);

// Step 2: Use the Provider to pass the store to the App
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);