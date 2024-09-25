// uiReducer.js

import { Map } from 'immutable';
import * as actionTypes from '../actions/uiActionTypes';

/**
 * The initial state of the UI, represented as an Immutable Map.
 */
const initialState = Map({
    /**
     * Indicates whether the notification drawer is visible or not.
     */
    isNotificationDrawerVisible: false,
    /**
     * Indicates whether the user is logged in or not.
     */
    isUserLoggedIn: false,
    /**
     * Stores the user object if the user is logged in, represented as an Immutable Map.
     */
    user: Map({})
});

/**
 * The reducer function for managing the UI state, which takes the current state and an action as arguments and returns the next state.
 *
 * @param {object} state The current state, represented as an Immutable Map.
 * @param {object} action The action.
 *
 * @returns {object} The next state, represented as an Immutable Map.
 */
const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DISPLAY_NOTIFICATION_DRAWER:
            /**
             * Returns a new state with the `isNotificationDrawerVisible` property set to `true`.
             */
            return state.set('isNotificationDrawerVisible', true);
        case actionTypes.HIDE_NOTIFICATION_DRAWER:
            /**
             * Returns a new state with the `isNotificationDrawerVisible` property set to `false`.
             */
            return state.set('isNotificationDrawerVisible', false);
        case actionTypes.LOGIN_SUCCESS:
            /**
             * Returns a new state with the `isUserLoggedIn` property set to `true`.
             */
            return state.set('isUserLoggedIn', true);
        case actionTypes.LOGIN_FAILURE:
        case actionTypes.LOGOUT:
            /**
             * Returns a new state with the `isUserLoggedIn` property set to `false`.
             */
            return state.set('isUserLoggedIn', false);
        default:
            /**
             * Returns the current state if the action type is not recognized.
             */
            return state;
    }
};

/**
 * Exports the UI reducer as the default export of the module.
 */
export default uiReducer;