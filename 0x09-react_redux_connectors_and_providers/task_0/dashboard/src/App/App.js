import { connect } from 'react-redux';

/**
 * Maps the Redux state to the props of the component.
 *
 * @param {Object} state - The Redux state object.
 * @returns {Object} - An object containing the props derived from the state.
 */

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.ui.isLoggedIn
    };
};

export default connect(mapStateToProps)(App);