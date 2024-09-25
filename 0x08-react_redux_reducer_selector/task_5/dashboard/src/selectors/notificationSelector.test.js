// Import the selectors from the './notificationSelector' file
import {
    filterTypeSelected,
    getNotifications,
    getUnreadNotifications,
} from './notificationSelector';

// Import the Map data structure from the 'immutable' library
import { Map } from 'immutable';

// Define a test suite for the notification selectors
describe('notificationSelector', () => {
    // Define a sample state using an Immutable Map
    const state = Map({
        // The 'notifications' property is an Immutable Map containing notification objects
        notifications: Map({
            1: Map({ id: 1, isRead: false, type: 'default', value: 'New course available' }),
            2: Map({ id: 2, isRead: true, type: 'urgent', value: 'New resume available' }),
            3: Map({ id: 3, isRead: false, type: 'urgent', value: 'New data available' }),
        }),
        // The 'filter' property is a string representing the current filter
        filter: 'DEFAULT',
    });

    // Test case for the 'filterTypeSelected' selector
    it('filterTypeSelected should return the value of the filter', () => {
        // Call the 'filterTypeSelected' selector with the sample state
        const result = filterTypeSelected(state);
        // Assert that the result is equal to 'DEFAULT'
        expect(result).toEqual('DEFAULT');
    });

    // Test case for the 'getNotifications' selector
    it('getNotifications should return the list of notifications', () => {
        // Call the 'getNotifications' selector with the sample state
        const result = getNotifications(state);
        // Get the expected value by accessing the 'notifications' property of the state
        const expected = state.get('notifications');
        // Assert that the result is equal to the expected value
        expected(result).toEqual(expected);
    });

    // Test case for the 'getUnreadNotifications' selector
    it('getUnreadNotifications should return the list of unread notifications', () => {
        // Call the 'getUnreadNotifications' selector with the sample state
        const result = getUnreadNotifications(state);
        // Define the expected value as an Immutable Map containing only the unread notifications
        const expected = Map({
            1: Map({ id: 1, isRead: false, type: 'default', value: 'New course available' }),
            3: Map({ id: 3, isRead: false, type: 'urgent', value: 'New data available' }),
        });
        // Assert that the result is equal to the expected value
        expected(result).toEqual(expected);
    });
});