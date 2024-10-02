import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Footer.css';

/**
 * Maps the Redux state to the props of the Footer component.
 * This function is used to connect the Redux state to the React component.
 * It takes the Redux state as an argument and returns an object containing the user prop derived from the state.
 *
 * @param {Object} state - The Redux state object.
 * @returns {Object} - An object containing the user prop derived from the state.
 */
const mapStateToProps = (state) => ({
    user: state.auth.get('user')
});

/**
 * Represents the Footer component.
 * This functional component displays the footer content and the user's name if logged in.
 * 
 * @param {Object} props - The component props.
 * @param {Object} props.user - The user object from Redux state.
 */
const Footer = ({ user }) => (
    <footer className="App-footer">
        <p>Footer content here</p>
        {user && <p>Logged in as: {user.name}</p>}
    </footer>
);

// Define prop types for the component
Footer.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string
    })
};

// Define default props for the component
Footer.defaultProps = {
    user: null
};

/**
 * Connects the Redux state to the Footer component.
 * This higher-order component provided by React Redux connects the Footer component to the Redux store.
 */
export default connect(mapStateToProps)(Footer)