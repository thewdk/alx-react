import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActionCreators';

/**
 * Notifications component to display a list of notifications.
 */
class Notifications extends Component {
    /**
     * Lifecycle method called when the component is mounted.
     * It dispatches the fetchNotifications action to fetch the notifications.
     */
    componentDidMount() {
        const { fetchNotifications } = this.props;
        fetchNotifications();
    }

    /**
     * Render method of the Notifications component.
     * This method is responsible for rendering the JSX of the component.
     * It displays a heading and a list of notifications.
     * 
     * @returns {JSX.Element} - The JSX for the component.
     */
    render() {
        const { listNotifications } = this.props;

        return (
            <div>
                <h1>Notifications</h1>
                <ul>
                    {listNotifications.valueSeq().map(notification => (
                        <li key={notification.id}>{notification.message}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

/**
 * PropTypes for the Notifications component.
 * It defines the expected prop types for the component.
 */
Notifications.propTypes = {
    listNotifications: PropTypes.object.isRequired,
    fetchNotifications: PropTypes.func.isRequired,
};

/**
 * Maps the Redux state to the props of the Notifications component.
 * This function is used to connect the Redux state to the React component.
 * It extracts the notifications from the Redux state and maps them to the listNotifications prop.
 *
 * @param {Object} state - The Redux state object.
 * @returns {Object} - An object containing the listNotifications prop derived from the state.
 */
const mapStateToProps = (state) => {
    return {
        listNotifications: state.notifications.get('notifications')
    };
};

/**
 * Maps the action creators to the props of the Notifications component.
 * This object contains the fetchNotifications action creator.
 */
const mapDispatchToProps = {
    fetchNotifications
};

/**
 * Connects the Redux state and action creators to the Notifications component.
 * This higher-order component provided by React Redux connects the Notifications component to the Redux store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(Notifications)
