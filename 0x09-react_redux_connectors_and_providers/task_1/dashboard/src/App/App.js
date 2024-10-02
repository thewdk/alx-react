import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

/**
 * Maps the Redux state to the props of the component.
 * This function is used to connect the Redux state to the React component.
 * It takes the Redux state as an argument and returns an object containing the props derived from the state.
 *
 * @param {Object} state - The Redux state object.
 * @returns {Object} - An object containing the props derived from the state.
 */
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.ui.isLoggedIn,
        displayDrawer: state.ui.isNotificationDrawerVisible
    };
};

/**
 * Maps the action creators to the props of the component.
 * This object is used to connect the action creators to the React component.
 * It contains the functions to display and hide the notification drawer.
 */
const mapDispatchToProps = {
    displayNotificationDrawer,
    hideNotificationDrawer
};

/**
 * Represents the main App component.
 */
class App extends Component {
    /**
     * Render method of the App component.
     * This method is responsible for rendering the JSX of the component.
     * 
     * @returns {JSX.Element} - The JSX for the component.
     */
    render() {
        const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;

        return (
            <div>
                {/* Your component JSX here */}
                {isLoggedIn && <p>User is logged in</p>}
                {displayDrawer && <p>Notification Drawer is visible</p>}

                {/* Example buttons to trigger the actions */}
                <button onClick={displayNotificationDrawer}>Show Notification Drawer</button>
                <button onClick={hideNotificationDrawer}>Hide Notification Drawer</button>
            </div>
        );
    }
}

// Define prop types for the component
App.propTypes = {
    isLoggedIn: PropTypes.bool,
    displayDrawer: PropTypes.bool,
    displayNotificationDrawer: PropTypes.func.isRequired,
    hideNotificationDrawer: PropTypes.func.isRequired
};

// Define default props for the component
App.defaultProps = {
    isLoggedIn: false,
    displayDrawer: false
};

/**
 * Connects the Redux state and action creators to the App component.
 * This is a higher-order component provided by React Redux that connects a React component to a Redux store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);