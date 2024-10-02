import { Map } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from '../actions/notificationActionTypes';

// Initial state for the notifications
const initialState = Map({
    isLoading: false,
    notifications: Map({})
});

/**
 * Reducer function for notifications.
 * This function handles state updates for the notifications based on dispatched actions.
 * 
 * @param {Map} state - The current state of the notifications.
 * @param {Object} action - The action object containing the type and payload.
 * @returns {Map} - The new state of the notifications after applying the action.
 */
const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING_STATE:
            // Update the loading state based on the action payload
            return state.set('isLoading', action.isLoading);

        case FETCH_NOTIFICATIONS_SUCCESS:
            // Merge the new notifications data with the existing state
            return state.mergeDeep({
                isLoading: false,
                notifications: action.notifications
            });

        default:
            // Return the current state for unrecognized action types
            return state;
    }
};

export default notificationReducer;