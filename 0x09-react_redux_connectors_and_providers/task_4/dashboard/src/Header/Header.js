// Import connect from react-redux
import { connect } from 'react-redux';

/**
 * Maps the Redux state to the props of the Header component.
 * This function is used to connect the Redux state to the React component.
 * It takes the Redux state as an argument and returns an object containing the user prop derived from the state.
 *
 * @param {Object} state - The Redux state object.
 * @returns {Object} - An object containing the user prop derived from the state.
 */
const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

// Import the logout action creator (replace with actual path)
import { logout } from '../actions/authActions';

/**
 * Maps the action creators to the props of the Header component.
 * This object is used to connect the action creators to the React component.
 * It contains the logout action creator.
 */
const mapDispatchToProps = {
    onLogout: logout
};

/**
 * Represents the Header component.
 * This functional component displays a welcome message with the user's name and a logout link.
 * 
 * @param {Object} props - The component props.
 * @param {Object} props.user - The user object from Redux state.
 * @param {Function} props.onLogout - The logout action creator.
 */
const Header = ({ user, onLogout }) => {
    // Destructure user and onLogout from props
    return (
        <div>
            {/* Your header content using the user prop */}
            <p>Welcome, {user.name}!</p>
            <a href="#" onClick={onLogout}>Logout</a>
        </div>
    );
};

/**
 * Connects the Redux state and action creators to the Header component.
 * This higher-order component provided by React Redux connects the Header component to the Redux store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(Header)