import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';
import { markAsRead, setNotificationFilter } from './notificationActionCreators';

describe('notificationActionCreators', () => {
    it('verifies markAsRead returns correctly', () => {
        const expected = {
            type: MARK_AS_READ,
            index: 1
        }
        const actual = markAsRead(1);
        expect(actual).toEqual(expected);
    });
    it('verifies setNotificationFilter returns correctly', () => {
        const expected = {
            type: SET_TYPE_FILTER,
            filter: NotificationTypeFilters.DEFAULT
        }
        const actual = setNotificationFilter(NotificationTypeFilters.DEFAULT);
        expect(actual).toEqual(expected);
    });
})