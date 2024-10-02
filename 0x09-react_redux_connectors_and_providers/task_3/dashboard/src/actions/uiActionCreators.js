import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

import { bindActionCreators } from 'redux';

export const login = (email, password) => ({
    type: LOGIN,
    user: { email, password }
});

export const logout = () => ({
    type: LOGOUT
});

export const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER
});

export const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER
});

// Bind action creators to dispatch function
export const boundLogin = (email, password) => dispatch => bindActionCreators(login, dispatch)(email, password);
export const boundLogout = () => dispatch => bindActionCreators(logout, dispatch)();
export const boundDisplayNotificationDrawer = () => dispatch => bindActionCreators(displayNotificationDrawer, dispatch)();
export const boundHideNotificationDrawer = () => dispatch => bindActionCreators(hideNotificationDrawer, dispatch)();