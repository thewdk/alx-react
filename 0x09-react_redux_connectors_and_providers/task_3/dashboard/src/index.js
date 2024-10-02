import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';  // Import compose from Redux
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './App/App';
import './index.css';

/**
 * Creates a Redux store with the root reducer, thunk middleware, and extension support.
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  // Add extension support using composeEnhancers
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))  // Pass the thunk middleware inside composeEnhancers
);

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
);