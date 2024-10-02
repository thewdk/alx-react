// uiReducer.test.js


import { Map } from 'immutable';
import uiReducer from './uiReducer';  // Import the uiReducer function
import * as actionTypes from '../actions/uiActionTypes';

/**
 * Test suite for the uiReducer function.
 * This suite groups related tests for the uiReducer.
 */
describe('uiReducer', () => {
    /**
     * Test to check if the uiReducer returns the initial state.
     * It calls the uiReducer with undefined state and an empty action,
     * and expects the initial state to be returned.
     */
    it('should return the initial state', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map({})
        });
        expect(uiReducer(undefined, {})).toEqual(initialState);
    });

    /**
     * Test to check if the uiReducer does not change state for unknown actions.
     * It calls the uiReducer with a predefined state and an unknown action,
     * and expects the state to remain unchanged.
     */
    it('should not change state for unknown action', () => {
        const state = Map({
            isNotificationDrawerVisible: true,
            isUserLoggedIn: true,
            user: Map({ name: 'John Doe' })
        });
        expect(uiReducer(state, { type: 'UNKNOWN_ACTION' })).toEqual(state);
    });

    /**
     * Test to check if the uiReducer handles the DISPLAY_NOTIFICATION_DRAWER action.
     * It calls the uiReducer with a state where isNotificationDrawerVisible is false,
     * and the DISPLAY_NOTIFICATION_DRAWER action.
     * It expects the state to be updated with isNotificationDrawerVisible set to true.
     */
    it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
        const state = Map({
            isNotificationDrawerVisible: false
        });
        const action = { type: actionTypes.DISPLAY_NOTIFICATION_DRAWER };
        const expectedState = state.set('isNotificationDrawerVisible', true);
        expect(uiReducer(state, action)).toEqual(expectedState);
    });

    // Additional tests for other action types...

    /**
     * Test to check if the uiReducer handles a new custom action.
     * It defines a state with a custom property and a new custom action,
     * and expects the state to be updated based on the action.
     */
    it('should handle a new custom action', () => {
        // Define the state and action for the new custom action
        const state = Map({ customProp: false });
        const action = { type: actionTypes.NEW_CUSTOM_ACTION, payload: 'data' };
        const expectedState = state.set('customProp', true); // Update state based on the action
        expect(uiReducer(state, action)).toEqual(expectedState);
    });
})