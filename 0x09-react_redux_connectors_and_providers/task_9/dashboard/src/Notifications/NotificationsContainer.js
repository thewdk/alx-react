import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications, markAsRead, setNotificationFilter } from '../actions/notificationActionCreators';
import Notifications from './Notifications';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

/**
 * NotificationsContainer component that wraps the Notifications component.
 * This component is responsible for fetching notifications and passing the necessary props to Notifications.
 */
const NotificationsContainer = ({ fetchNotifications, ...props }) => {
    // Fetch notifications when the component mounts
    useEffect(() => {
        fetchNotifications();
    }, [fetchNotifications]);

    // Render the Notifications component with the provided props
    return <Notifications {...props} />;
};

/**
 * Map state to props for the NotificationsContainer component.
 * It uses the getUnreadNotificationsByType selector to retrieve the filtered list of unread notifications.
 */
const mapStateToProps = (state) => ({
    listNotifications: getUnreadNotificationsByType(state)
});

/**
 * Map dispatch to props for the NotificationsContainer component.
 * It includes the fetchNotifications, markAsRead, and setNotificationFilter actions.
 */
const mapDispatchToProps = {
    fetchNotifications,
    markAsRead,
    setNotificationFilter
};

// Connect the NotificationsContainer component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer)