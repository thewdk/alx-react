// Import the normalized data entities from the notifications module.
import { entities } from './notifications';

/**
 * Retrieves all notifications for a given user from the normalized dataset.
 * @param {string} userId - The ID of the user.
 * @returns {Array<Object>} - An array of notification contexts.
 */
export function getAllNotificationsByUser(userId) {
    // Access the users entity directly from the normalized data.
    const user = entities.users[userId];
    if (!user) return [];

    // Access the notifications entity directly from the normalized data.
    const userNotifications = entities.notifications[user.id];
    if (!userNotifications) return [];

    // Map over the notifications to retrieve their context from the messages entity.
    return userNotifications.map(notificationId => entities.messages[notificationId].context);
}