import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './actionTypes';

/**
 * Action creators for login success.
 * 
 * @returns {Object} - An action object with type LOGIN_SUCCESS.
 */
export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});

/**
 * Action creators for login failure.
 * 
 * @returns {Object} - An action object with type LOGIN_FAILURE.
 */
export const loginFailure = () => ({
    type: LOGIN_FAILURE
});

/**
 * Action creators for logout.
 * 
 * @returns {Object} - An action object with type LOGOUT.
 */
export const logout = () => ({
    type: LOGOUT
});

/**
 * Async action creator using Redux Thunk for login request.
 * 
 * @param {Object} credentials - The login credentials.
 * @returns {Function} - A function that dispatches actions based on the login result.
 */
export const loginRequest = (credentials) => {
    return (dispatch) => {
        // Example API call to login endpoint
        return fetch('https://example.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(response => response.json())
            .then(data => {
                // If the login is successful, dispatch the loginSuccess action
                if (data.success) {
                    dispatch(loginSuccess());
                } else {
                    // If the login fails, dispatch the loginFailure action
                    dispatch(loginFailure());
                }
            })
            .catch(error => {
                // If there's an error, dispatch the loginFailure action
                dispatch(loginFailure());
            });
    };
}