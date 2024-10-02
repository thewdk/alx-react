import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import notificationReducer from './notificationReducer';
import uiReducer from './uiReducer';

/**
 * The root reducer containing every reducer.
 * This function combines multiple reducers into a single root reducer using the combineReducers function from Redux.
 * It takes an object as an argument, where the keys represent the state properties and the values are the corresponding reducers.
 * 
 * @returns {Function} - The combined root reducer function.
 */
const rootReducer = combineReducers({
    courses: courseReducer,
    notifications: notificationReducer,
    ui: uiReducer
});

export default rootReducer