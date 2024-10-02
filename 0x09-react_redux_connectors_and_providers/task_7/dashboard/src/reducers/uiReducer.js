import { Map } from 'immutable';
import * as actionTypes from '../actions/uiActionTypes';

/**
 * The initial state of the UI, represented as an Immutable Map.
 * The state contains properties for:
 * - isNotificationDrawerVisible: boolean indicating if the notification drawer should be visible
 * - isUserLoggedIn: boolean indicating if the user is logged in
 * - user: an Immutable Map representing the user object
 */
const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: Map({}),
});

/**
 * The UI reducer function that handles state updates based on dispatched actions.
 * 
 * @param {Map} state - The current state of the UI, defaulting to the initialState if not provided.
 * @param {Object} action - The action object containing the type and payload.
 * @returns {Map} - The updated state based on the action type.
 */
const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DISPLAY_NOTIFICATION_DRAWER:
            // Update the state to show the notification drawer by setting the property to true
            return state.set('isNotificationDrawerVisible', true);
        case actionTypes.HIDE_NOTIFICATION_DRAWER:
            // Update the state to hide the notification drawer by setting the property to false
            return state.set('isNotificationDrawerVisible', false);
        case actionTypes.LOGIN_SUCCESS:
            // Update the state to set the user as logged in and store the user object when login is successful
            return state.set('isUserLoggedIn', true).set('user', action.user);
        case actionTypes.LOGIN_FAILURE:
        case actionTypes.LOGOUT:
            // Update the state to set the user as logged out and clear the user object when logout action is dispatched
            return state.set('isUserLoggedIn', false).set('user', null);
        default:
            // Return the current state for unrecognized action types
            return state;
    }
};

export default uiReducer