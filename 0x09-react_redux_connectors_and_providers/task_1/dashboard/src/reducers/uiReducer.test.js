// uiReducer.test.js

import { Map } from 'immutable';
import uiReducer from './uiReducer';
import * as actionTypes from '../actions/uiActionTypes';

/**
 * Unit tests for the UI reducer.
 */
describe('uiReducer', () => {
    /**
     * Test that the reducer returns the initial state when no state or action is provided.
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
     * Test that the reducer does not change the state for an unknown action.
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
     * Test that the reducer handles the DISPLAY_NOTIFICATION_DRAWER action correctly.
     */
    it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
        const state = Map({
            isNotificationDrawerVisible: false
        });
        const action = { type: actionTypes.DISPLAY_NOTIFICATION_DRAWER };
        const expectedState = state.set('isNotificationDrawerVisible', true);
        expect(uiReducer(state, action)).toEqual(expectedState);
    });

    /**
     * Test that the reducer handles the HIDE_NOTIFICATION_DRAWER action correctly.
     */
    it('should handle HIDE_NOTIFICATION_DRAWER', () => {
        const state = Map({
            isNotificationDrawerVisible: true
        });
        const action = { type: actionTypes.HIDE_NOTIFICATION_DRAWER };
        const expectedState = state.set('isNotificationDrawerVisible', false);
        expect(uiReducer(state, action)).toEqual(expectedState);
    });

    /**
     * Test that the reducer handles the LOGIN_SUCCESS action correctly.
     */
    it('should handle LOGIN_SUCCESS', () => {
        const state = Map({
            isUserLoggedIn: false
        });
        const action = { type: actionTypes.LOGIN_SUCCESS };
        const expectedState = state.set('isUserLoggedIn', true);
        expect(uiReducer(state, action)).toEqual(expectedState);
    });

    /**
     * Test that the reducer handles the LOGIN_FAILURE action correctly.
     */
    it('should handle LOGIN_FAILURE', () => {
        const state = Map({
            isUserLoggedIn: true
        });
        const action = { type: actionTypes.LOGIN_FAILURE };
        const expectedState = state.set({
            isUserLoggedIn: false
        });
        expect(uiReducer(state, action)).toEqual(expectedState);
    });

    /**
     * Test that the reducer handles the LOGOUT action correctly.
     */
    it('should handle LOGOUT', () => {
        const state = Map({
            isUserLoggedIn: true
        });
        const action = { type: actionTypes.LOGOUT };
        const expectedState = state.set({
            isUserLoggedIn: false
        });
        expect(uiReducer(state, action)).toEqual(expectedState);
    });
});