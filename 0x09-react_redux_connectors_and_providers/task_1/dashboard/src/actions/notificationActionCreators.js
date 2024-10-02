// notificationActionCreators.js

import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

import { bindActionCreators } from 'redux';

export const markAsAread = index => ({
    type: MARK_AS_READ,
    index
});

export const setNotificationFilter = filter => ({
    type: SET_TYPE_FILTER,
    filter
});

// Bind action creators to dispatch function
export const boundMarkAsAread = index => dispatch => bindActionCreators(markAsAread, dispatch)(index);
export const boundSetNotificationFilter = filter => dispatch => bindActionCreators(setNotificationFilter, dispatch)(filter);