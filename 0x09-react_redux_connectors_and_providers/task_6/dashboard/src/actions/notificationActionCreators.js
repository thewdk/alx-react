import { FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from './notificationActionTypes';

/**
 * Action creator to set the loading state.
 * This function creates an action object with the type SET_LOADING_STATE and the isLoading payload.
 * 
 * @param {boolean} isLoading - The loading state to set.
 * @returns {Object} - An action object with the type and isLoading payload.
 */
export const setLoadingState = isLoading => {
    return {
        type: SET_LOADING_STATE,
        isLoading
    };
};

/**
 * Action creator to set the notifications.
 * This function creates an action object with the type FETCH_NOTIFICATIONS_SUCCESS and the notifications payload.
 * 
 * @param {array} notifications - The notifications data to set.
 * @returns {Object} - An action object with the type and notifications payload.
 */
export const setNotifications = notifications => {
    return {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        notifications
    };
};

/**
 * Action creator to fetch notifications.
 * This function returns a thunk function that dispatches actions to handle the asynchronous fetch operation.
 * It dispatches setLoadingState with true, fetches /notifications.json, dispatches setNotifications with the data,
 * and sets the loading state to false again. If an error occurs, it logs the error and sets the loading state to false.
 * 
 * @returns {Function} - A thunk function that dispatches actions based on the fetch operation.
 */
export const fetchNotifications = () => {
    return dispatch => {
        // Dispatch setLoadingState with true
        dispatch(setLoadingState(true));

        // Fetch /notifications.json
        fetch('/notifications.json')
            .then(response => response.json())
            .then(data => {
                // Dispatch setNotifications with the data
                dispatch(setNotifications(data));

                // Set the loading state to false again
                dispatch(setLoadingState(false));
            })
            .catch(error => {
                // Handle any error here
                console.error('Error fetching notifications: ', error);

                // Set the loading state to false on error as well
                dispatch(setLoadingState(false));
            });
    };
}