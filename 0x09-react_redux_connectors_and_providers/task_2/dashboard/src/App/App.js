import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginRequest, logout } from '../actions/authActions';
import './App.css';

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
        const { isLoggedIn, login, logout, loginError } = this.props;

        return (
            <div className="App">
                <header className="App-header">
                    <h1>Welcome to the Dashboard</h1>
                    <button onClick={login}>Login</button>
                    <button onClick={logout}>Logout</button>
                    {isLoggedIn ? <p>Logged in</p> : <p>Logged out</p>}
                    {loginError && <p>Login failed</p>}
                </header>
            </div>
        );
    }
}

/**
 * Maps the Redux state to the props of the component.
 * This function is used to connect the Redux state to the React component.
 * It takes the Redux state as an argument and returns an object containing the props derived from the state.
 *
 * @param {Object} state - The Redux state object.
 * @returns {Object} - An object containing the props derived from the state.
 */
const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.get('isLoggedIn'),
    loginError: state.auth.get('loginError')
});

/**
 * Maps the action creators to the props of the component.
 * This function is used to connect the action creators to the React component.
 * It takes the dispatch function as an argument and returns an object containing the props derived from the action creators.
 *
 * @param {Function} dispatch - The Redux dispatch function.
 * @returns {Object} - An object containing the props derived from the action creators.
 */
const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(loginRequest({ username: 'user', password: 'pass' })),
    logout: () => dispatch(logout())
});

/**
 * Connects the Redux state and action creators to the App component.
 * This is a higher-order component provided by React Redux that connects a React component to a Redux store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(App)