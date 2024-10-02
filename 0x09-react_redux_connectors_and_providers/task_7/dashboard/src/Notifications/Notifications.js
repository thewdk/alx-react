import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNotifications, markAsRead } from '../actions/notificationActionCreators';
import { getUnreadNotifications } from '../selectors/notifications';

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

    // Render the list of notifications
    render() {
        const { listNotifications } = this.props;

        return (
            <div>
                <h1>Notifications</h1>
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
};

// Map state to props
const mapStateToProps = (state) => {
    return {
        listNotifications: getUnreadNotifications(state)
    };
};

// Map dispatch to props
const mapDispatchToProps = {
    fetchNotifications,
    markAsRead
};

// Connect Notifications component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Notifications);