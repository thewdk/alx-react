import { fromJS } from 'immutable';
import { getUnreadNotificationsByType } from './notificationSelector';

describe('notificationSelector', () => {
    // Define mock state for the tests
    const mockState = {
        notifications: fromJS({
            1: { id: 1, message: 'Test Notification 1', isRead: false, type: 'default' },
            2: { id: 2, message: 'Test Notification 2', isRead: false, type: 'urgent' },
            3: { id: 3, message: 'Test Notification 3', isRead: true, type: 'default' },
            4: { id: 4, message: 'Test Notification 4', isRead: false, type: 'urgent' }
        }),
        filter: 'default'
    };

    // Test that the getUnreadNotificationsByType selector returns unread default notifications when the filter is set to 'default'
    it('should return unread default notifications when filter is set to default', () => {
        const state = { ...mockState, filter: 'default' };
        const result = getUnreadNotificationsByType(state);
        const expected = [
            { id: 1, message: 'Test Notification 1', isRead: false, type: 'default' }
        ];
        expect(result.toJS()).toEqual(expected);
    });

    // Test that the getUnreadNotificationsByType selector returns unread urgent notifications when the filter is set to 'urgent'
    it('should return unread urgent notifications when filter is set to urgent', () => {
        const state = { ...mockState, filter: 'urgent' };
        const result = getUnreadNotificationsByType(state);
        const expected = [
            { id: 2, message: 'Test Notification 2', isRead: false, type: 'urgent' },
            { id: 4, message: 'Test Notification 4', isRead: false, type: 'urgent' }
        ];
        expect(result.toJS()).toEqual(expected);
    });

    // Test that the getUnreadNotificationsByType selector returns an empty list if there are no unread notifications of the specified type
    it('should return an empty list if there are no unread notifications of the specified type', () => {
        const emptyUnreadState = {
            notifications: fromJS({
                1: { id: 1, message: 'Test Notification 1', isRead: true, type: 'default' },
                2: { id: 2, message: 'Test Notification 2', isRead: true, type: 'urgent' }
            }),
            filter: 'default'
        };
        const result = getUnreadNotificationsByType(emptyUnreadState);
        expect(result.toJS()).toEqual([]);
    });

    // Test that the getUnreadNotificationsByType selector returns an empty list if no notifications are present
    it('should return an empty list if no notifications are present', () => {
        const emptyState = {
            notifications: fromJS({}),
            filter: 'default'
        };
        const result = getUnreadNotificationsByType(emptyState);
        expect(result.toJS()).toEqual([]);
    });
})