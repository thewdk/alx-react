import * as notifications from '../../../notifications.json';

export function getAllNotificationsByUser(userId) {
    return notifications.default
        .filter((notification) => userId === notification.author.id)
        .map((notification) => notification.context);
}