// import Action Types
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

// Send payload of user info
export function login(email, password) {
    return {
        type: LOGIN,
        user: { email, password },
    };
}

// Log user out
export function logout() {
    return {
        type: LOGOUT,
    }
}

// display notification drawer
export function displayNotificationDrawer() {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER,
    }
}

// hide notification drawer
export function hideNotificationDrawer() {
    return {
        type: HIDE_NOTIFICATION_DRAWER,
    }
}