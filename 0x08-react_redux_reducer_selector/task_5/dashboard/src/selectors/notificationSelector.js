import { Map } from 'immutable';

// This function retrieves the currently selected filter type from the state object.
// The state object is assumed to be an Immutable.js Map.
export const filterTypeSelected = (state) => state.get('filter');

// This function retrieves all notifications from the state object.
// The state object is assumed to be an Immutable.js Map.
export const getNotifications = (state) => state.get('notifications');

// This function retrieves all unread notifications from the state object.
// The state object is assumed to be an Immutable.js Map.
// It filters the notifications based on the 'isRead' property.
export const getUnreadNotifications = (state) => {
    // Get all notifications from the state
    const notifications = state.get('notifications');

    // Filter the notifications to only include those where 'isRead' is false (unread)
    return notifications.filter((notification) => !notification.get('isRead'));
};