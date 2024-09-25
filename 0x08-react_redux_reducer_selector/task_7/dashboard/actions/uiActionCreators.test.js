// import ui actions
import {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
    loginSuccess,
    loginFailure,
    loginRequest
} from './uiActionCreators';

// import action types
import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './uiActionTypes';

// import mock redux store for tests
import configureStore from 'redux-mock-store';

// import the thunk redux middleware
import thunk from 'redux-thunk';
const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

// mockStore() takes an initial state
const store = mockStore({});

// A global user example to compare against
const user = {
    email: 'ziggy@stardust.com',
    password: 'password',
};

// Mocks node-fetch which actually mocks every method and property from a fetch-mock.sandbox() object
jest.mock('node-fetch', () => require('fetch-mock').sandbox());
const fetchMock = require('node-fetch');

describe('uiActions', () => {
    it('verifies the return of login', () => {
        const expected = {
            type: LOGIN,
            user,
        };
        const actual = login('ziggy@stardust.com', 'password');

        expect(actual).toEqual(expected);
    });

    it('verifies the return on logout', () => {
        const expected = {
            type: LOGOUT
        };
        const actual = logout();
        expect(actual).toEqual(expected);
    });

    it('verifies the return of displayNotificationDrawer', () => {
        const expected = {
            type: DISPLAY_NOTIFICATION_DRAWER,
        };
        const actual = displayNotificationDrawer();
        expect(expected).toEqual(actual);
    });

    it('verifies the return of hideNotificationDrawer', () => {
        const expected = {
            type: HIDE_NOTIFICATION_DRAWER,
        };
        const actual = hideNotificationDrawer();
        expect(expected).toEqual(actual);
    });
});

describe('loginRequest Action dispatching', () => {
    it('verifies store received LOGIN and LOGIN_SUCCESS', () => {

        //fetchMock is actually a call to the configured fetch-mock instance *named* fetchMock
        fetchMock.get('/login-success.json', 200);

        // Return a dispatch to the store
        return store.dispatch(loginRequest(user.email, user.password))
            .then(() => {
                // store the store's recorded actions
                const actions = store.getActions();
                // expect them to be login and login success
                expect(actions).toEqual([
                    login(user.email, user.password),
                    loginSuccess()
                ]);
                // clear the store's actions
                store.clearActions();
            });
    });

    it('verifies store received LOGIN and LOGIN_FAILURE', () => {
        fetchMock.get(
            // matcher
            '/login-success.json',
            // response
            { throws: new Error('fetch failed') },
            // options
            // overwriteRoutes overwrites the logic given to this endpoint
            // Here, I want the response to throw a specific error for this test.
            { overwriteRoutes: true }
        );
        return store.dispatch(loginRequest(user.email, user.password)).then(() => {
            const actions = store.getActions();
            expect(actions).toEqual([
                login(user.email, user.password),
                loginFailure()
            ]);
            store.clearActions();
        });
    });
});