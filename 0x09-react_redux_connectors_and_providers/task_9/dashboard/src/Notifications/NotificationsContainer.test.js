import React from 'react';
import { shallow } from 'enzyme';
import { NotificationsContainer } from './NotificationsContainer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// Configure a mock Redux store with the thunk middleware
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('NotificationsContainer', () => {
    let store;
    let fetchNotificationsMock;

    // Set up mock data and store before each test
    beforeEach(() => {
        fetchNotificationsMock = jest.fn();
        store = mockStore({
            notifications: {
                notifications: []
            },
            filter: 'default'
        });
    });

    // Test that notifications are fetched when the component mounts
    it('should fetch notifications on mount', () => {
        shallow(<NotificationsContainer store={store} fetchNotifications={fetchNotificationsMock} />);
        expect(fetchNotificationsMock).toHaveBeenCalled();
    });
})