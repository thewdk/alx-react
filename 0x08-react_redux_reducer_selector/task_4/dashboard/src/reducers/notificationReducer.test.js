import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
    it('FETCH_NOTIFICATIONS_SUCCESS should update the notifications with isRead set to false', () => {
        const initialState = {
            notifications: [],
            filter: 'DEFAULT',
        };

        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
                {
                    id: 1,
                    type: 'default',
                    value: 'New course available',
                },
                {
                    id: 2,
                    type: 'urgent',
                    value: 'New resume available',
                },
            ],
        };

        const expectedState = {
            notifications: [
                {
                    id: 1,
                    type: 'default',
                    value: 'New course available',
                    isRead: false,
                },
                {
                    id: 2,
                    type: 'urgent',
                    value: 'New resume available',
                    isRead: false,
                },
            ],
            filter: 'DEFAULT',
        };

        const newState = notificationReducer(initialState, action);
        expect(newState).toEqual(expectedState);
    });

    it('MARK_AS_READ should mark the notification as read', () => {
        const initialState = {
            notifications: [
                {
                    id: 1,
                    type: 'default',
                    value: 'New course available',
                    isRead: false,
                },
                {
                    id: 2,
                    type: 'urgent',
                    value: 'New resume available',
                    isRead: false,
                },
            ],
            filter: 'DEFAULT',
        };

        const action = {
            type: MARK_AS_READ,
            index: 1,
        };

        const expectedState = {
            notifications: [
                {
                    id: 1,
                    type: 'default',
                    value: 'New course available',
                    isRead: false,
                },
                {
                    id: 2,
                    type: 'urgent',
                    value: 'New resume available',
                    isRead: true,
                },
            ],
            filter: 'DEFAULT',
        };

        const newState = notificationReducer(initialState, action);
        expect(newState).toEqual(expectedState);
    });

    it('SET_TYPE_FILTER should update the filter', () => {
        const initialState = {
            notifications: [],
            filter: 'DEFAULT',
        };

        const action = {
            type: SET_TYPE_FILTER,
            filter: 'URGENT',
        };

        const expectedState = {
            notifications: [],
            filter: 'URGENT',
        };

        const newState = notificationReducer(initialState, action);
        expect(newState).toEqual(expectedState);
    });
});