import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'; // Import the root reducer
import App from './App/App';
import './index.css';

/**
 * Creates a Redux store with the root reducer, thunk middleware, and extension support.
 * It uses the createStore function from Redux to create the store.
 * The root reducer is passed as the first argument to define the initial state and handle state updates.
 * Thunk middleware is applied using applyMiddleware to enable asynchronous actions.
 * The Redux DevTools extension is enabled using the composeEnhancers function, which allows for debugging and time-travel functionality in the browser.
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

/**
 * Renders the React application with the Redux store provider.
 * The ReactDOM.render function is used to render the React application.
 * The Provider component from react-redux is used to wrap the App component and provide the Redux store to all the components in the application.
 * The store variable, which holds the created Redux store, is passed as a prop to the Provider component.
 * The document.getElementById('root') selects the DOM element with the ID 'root' and mounts the rendered React application there.
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)