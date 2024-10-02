import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { markAsRead, setNotificationFilter, setLoadingState, setNotifications, fetchNotifications } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';

// Setup mock store with middleware
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

/**
 * Test suite for the notificationActionCreators.
 * This suite covers testing the action creators for notifications.
 */
describe('notificationActionCreators', () => {
    /**
     * Test for creating an action to mark a notification as read.
     */
    it('should create an action to mark a notification as read', () => {
        const index = 1;
        const expectedAction = {
            type: MARK_AS_READ,
            index,
        };
        expect(markAsRead(index)).toEqual(expectedAction);
    });

    /**
     * Test for creating an action to set the notification filter.
     */
    it('should create an action to set the notification filter', () => {
        const filter = 'DEFAULT';
        const expectedAction = {
            type: SET_TYPE_FILTER,
            filter,
        };
        expect(setNotificationFilter(filter)).toEqual(expectedAction);
    });

    /**
     * Test for creating an action to set the loading state.
     */
    it('should create an action to set the loading state', () => {
        const isLoading = true;
        const expectedAction = {
            type: SET_LOADING_STATE,
            isLoading,
        };
        expect(setLoadingState(isLoading)).toEqual(expectedAction);
    });

    /**
     * Test for creating an action to set notifications.
     */
    it('should create an action to set notifications', () => {
        const notifications = [{ id: 1, message: 'Notification 1' }];
        const expectedAction = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            notifications,
        };
        expect(setNotifications(notifications)).toEqual(expectedAction);
    });

    /**
     * Test for dispatching correct actions on fetchNotifications.
     */
    it('should dispatch the correct actions on fetchNotifications', () => {
        const notifications = [{ id: 1, message: 'Notification 1' }];
        const store = mockStore({ notifications: [] });

        // Mock fetch response
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(notifications),
            })
        );

        const expectedActions = [
            { type: SET_LOADING_STATE, isLoading: true },
            { type: FETCH_NOTIFICATIONS_SUCCESS, notifications },
            { type: SET_LOADING_STATE, isLoading: false }
        ];

        return store.dispatch(fetchNotifications()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});