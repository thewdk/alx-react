import { Map } from 'immutable';
import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from '../actions/notificationActionTypes';

/**
 * Test suite for the notificationReducer.
 * This suite groups related tests for the notificationReducer.
 */
describe('notificationReducer', () => {
    /**
     * Test to check if the notificationReducer returns the initial state.
     * It calls the notificationReducer with undefined state and an empty action,
     * and expects the initial state to be returned.
     */
    it('should return the initial state', () => {
        const initialState = Map({
            isLoading: false,
            notifications: Map({})
        });
        expect(notificationReducer(undefined, {})).toEqual(initialState);
    });

    /**
     * Test to check if the notificationReducer handles SET_LOADING_STATE.
     * It calls the notificationReducer with a SET_LOADING_STATE action,
     * and expects the state to be updated with isLoading set to true.
     */
    it('should handle SET_LOADING_STATE', () => {
        const startAction = {
            type: SET_LOADING_STATE,
            isLoading: true
        };
        const expectedState = Map({
            isLoading: true,
            notifications: Map({})
        });
        expect(notificationReducer(undefined, startAction)).toEqual(expectedState);
    });

    /**
     * Test to check if the notificationReducer handles FETCH_NOTIFICATIONS_SUCCESS.
     * It calls the notificationReducer with a FETCH_NOTIFICATIONS_SUCCESS action,
     * and expects the state to be updated with the notifications data.
     */
    it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
        const notifications = [
            { id: 1, message: 'Notification 1' },
            { id: 2, message: 'Notification 2' }
        ];
        const startAction = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            notifications
        };
        const expectedState = Map({
            isLoading: false,
            notifications: Map(notifications)
        });
        expect(notificationReducer(undefined, startAction)).toEqual(expectedState);
    });
});
