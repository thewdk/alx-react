import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './App/App';
import './index.css';

/**
 * Creates a Redux store with the root reducer and thunk middleware.
 * Thunk middleware is used to handle asynchronous actions in Redux.
 */
const store = createStore(rootReducer, applyMiddleware(thunk));

/**
 * Renders the React application with the Redux store provider.
 * The App component is wrapped with the Provider component from react-redux,
 * which makes the Redux store available to all the components in the application.
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)