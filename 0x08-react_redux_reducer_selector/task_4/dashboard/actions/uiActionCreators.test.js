import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

describe('uiActionCreators', () => {
    it('verifies the return of login', () => {
        const expected = {
            type: LOGIN,
            user: {
                email: 'ziggy@stardust.com',
                password: 'password'
            }
        };
        const actual = login('ziggy@stardust.com', 'password');

        expect(actual).toEqual(expected);
    });

    it('verifies the return on logout', () => {
        const expected = {
            type: LOGOUT
        };
        const actual = logout();
        expect(actual).toEqual(expected);
    });

    it('verifies the return of displayNotificationDrawer', () => {
        const expected = {
            type: DISPLAY_NOTIFICATION_DRAWER,
        };
        const actual = displayNotificationDrawer();
        expect(expected).toEqual(actual);
    });

    it('verifies the return of hideNotificationDrawer', () => {
        const expected = {
            type: HIDE_NOTIFICATION_DRAWER,
        };
        const actual = hideNotificationDrawer();
        expect(expected).toEqual(actual);
    });
});