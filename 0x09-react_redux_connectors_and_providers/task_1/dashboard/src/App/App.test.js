import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import App from './App';
import { fromJS } from 'immutable';

// Create a mock Redux store
const mockStore = configureMockStore();
const initialState = {
    ui: fromJS({
        isLoggedIn: false,
        isNotificationDrawerVisible: false
    })
};

// Test suite for the App component
describe('<App />', () => {
    let store;

    // Set up the mock store before each test
    beforeEach(() => {
        store = mockStore(initialState);
    });

    // Test to check if the component renders without crashing
    it('renders without crashing', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(wrapper.exists()).toBe(true);
    });

    // Test to check if 'User is logged in' is displayed when isLoggedIn is true
    it('should display User is logged in when isLoggedIn is true', () => {
        store = mockStore({
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

    // Test to check if 'Notification Drawer is visible' is displayed when displayDrawer is true
    it('should display Notification Drawer is visible when displayDrawer is true', () => {
        store = mockStore({
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

    // Test to check if displayNotificationDrawer is called when 'Show Notification Drawer' button is clicked
    it('should call displayNotificationDrawer when Show Notification Drawer button is clicked', () => {
        const mockDisplayNotificationDrawer = jest.fn();
        const wrapper = shallow(
            <App
                displayNotificationDrawer={mockDisplayNotificationDrawer}
                hideNotificationDrawer={() => { }}
                isLoggedIn={false}
                displayDrawer={false}
            />
        );

        wrapper.find('button').at(0).simulate('click');
        expect(mockDisplayNotificationDrawer).toHaveBeenCalled();
    });

    // Test to check if hideNotificationDrawer is called when 'Hide Notification Drawer' button is clicked
    it('should call hideNotificationDrawer when Hide Notification Drawer button is clicked', () => {
        const mockHideNotificationDrawer = jest.fn();
        const wrapper = shallow(
            <App
                displayNotificationDrawer={() => { }}
                hideNotificationDrawer={mockHideNotificationDrawer}
                isLoggedIn={false}
                displayDrawer={false}
            />
        );

        wrapper.find('button').at(1).simulate('click');
        expect(mockHideNotificationDrawer).toHaveBeenCalled();
    });
});