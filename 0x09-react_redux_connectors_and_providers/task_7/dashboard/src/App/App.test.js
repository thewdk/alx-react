import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import App from './App';
import { fromJS } from 'immutable';

/**
 * Creates a mock Redux store for testing.
 */
const mockStore = configureMockStore();
const initialState = {
    courses: {},
    notifications: {},
    ui: {}
};

/**
 * Test suite for the App component.
 * This suite groups related tests for the App component.
 */
describe('<App />', () => {
    let store;

    /**
     * Sets up the mock store before each test.
     */
    beforeEach(() => {
        store = mockStore(initialState);
    });

    /**
     * Test to check if the App component renders without crashing.
     * It renders the App component wrapped with the Provider component and checks if the wrapper exists.
     */
    it('renders without crashing', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(wrapper.exists()).toBe(true);
    });

    /**
     * Test to check if "User is logged in" is displayed when isLoggedIn is true.
     * It renders the App component with a mock store where isLoggedIn is true, dives into the component, and checks if the text "User is logged in" is present.
     */
    it('should display "User is logged in" when isLoggedIn is true', () => {
        store = mockStore({
            courses: {},
            notifications: {},
            ui: fromJS({
                isLoggedIn: true,
                isNotificationDrawerVisible: false
            })
        });
        const wrapper = shallow(
            <Provider store={store}>
                <App />
            </Provider>
        ).dive().dive();

        expect(wrapper.find('p').text()).toBe('User is logged in');
    });

    /**
     * Test to check if "Notification Drawer is visible" is displayed when isNotificationDrawerVisible is true.
     * It renders the App component with a mock store where isNotificationDrawerVisible is true, dives into the component, and checks if the text "Notification Drawer is visible" is present.
     */
    it('should display "Notification Drawer is visible" when isNotificationDrawerVisible is true', () => {
        store = mockStore({
            courses: {},
            notifications: {},
            ui: fromJS({
                isLoggedIn: false,
                isNotificationDrawerVisible: true
            })
        });
        const wrapper = shallow(
            <Provider store={store}>
                <App />
            </Provider>
        ).dive().dive();

        expect(wrapper.find('p').text()).toBe('Notification Drawer is visible');
    });
});