import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNotifications, markAsRead, setNotificationFilter } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

/**
 * Notifications component to display a list of notifications.
 */
class Notifications extends Component {
    // Fetch notifications when component mounts
    componentDidMount() {
        const { fetchNotifications } = this.props;
        fetchNotifications();
    }

    // Handle marking a notification as read
    handleMarkAsRead = (id) => {
        const { markAsRead } = this.props;
        markAsRead(id);
    }

    // Handle changing the notification filter
    handleFilterChange = (filter) => {
        const { setNotificationFilter } = this.props;
        setNotificationFilter(filter);
    }

    // Render the list of notifications
    render() {
        const { listNotifications } = this.props;

        return (
            <div>
                <h1>Notifications</h1>
                <button onClick={() => this.handleFilterChange('urgent')}>‼️</button>
                <button onClick={() => this.handleFilterChange('default')}>💠</button>
                <ul>
                    {listNotifications.valueSeq().map(notification => (
                        <li key={notification.id} onClick={() => this.handleMarkAsRead(notification.id)}>
                            {notification.message}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

// Define prop types for Notifications component
Notifications.propTypes = {
    listNotifications: PropTypes.object.isRequired,
    fetchNotifications: PropTypes.func.isRequired,
    markAsRead: PropTypes.func.isRequired,
    setNotificationFilter: PropTypes.func.isRequired,
};

// Map state to props
const mapStateToProps = (state) => {
    return {
        listNotifications: getUnreadNotificationsByType(state)
    };
};

// Map dispatch to props
const mapDispatchToProps = {
    fetchNotifications,
    markAsRead,
    setNotificationFilter
};

// Connect Notifications component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Notifications)
