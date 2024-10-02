import React from 'react';
import { shallow } from 'enzyme';
import { Notifications, mapStateToProps, mapDispatchToProps } from './Notifications';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchNotifications, markAsRead, setNotificationFilter } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

// Configure a mock Redux store with the thunk middleware
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Notifications Component and Redux Mappings', () => {
    let store;
    let mockNotifications;

    // Set up mock data
    beforeEach(() => {
        mockNotifications = {
            1: { id: 1, message: 'Test Notification 1', isRead: false, type: 'default' },
            2: { id: 2, message: 'Test Notification 2', isRead: false, type: 'urgent' }
        };

        store = mockStore({
            notifications: {
                notifications: mockNotifications
            },
            filter: 'default'
        });
    });

    // Test that the Notifications component renders without crashing
    it('renders Notifications component without crashing', () => {
        const wrapper = shallow(<Notifications store={store} />);
        expect(wrapper.exists()).toBe(true);
    });

    // Test that the mapStateToProps function maps the state correctly
    it('maps state to props correctly using mapStateToProps', () => {
        const mockState = {
            notifications: {
                notifications: mockNotifications
            },
            filter: 'default'
        };
        const expectedNotifications = getUnreadNotificationsByType(mockState);
        const mappedProps = mapStateToProps(mockState);
        expect(mappedProps.listNotifications).toEqual(expectedNotifications);
    });

    // Test that the mapDispatchToProps function maps the dispatch correctly
    it('maps dispatch to props correctly using mapDispatchToProps', () => {
        const mockDispatch = jest.fn();
        const mappedProps = mapDispatchToProps(mockDispatch);
        mappedProps.fetchNotifications();
        expect(mockDispatch).toHaveBeenCalledWith(fetchNotifications());
        mappedProps.markAsRead(1);
        expect(mockDispatch).toHaveBeenCalledWith(markAsRead(1));
        mappedProps.setNotificationFilter('default');
        expect(mockDispatch).toHaveBeenCalledWith(setNotificationFilter('default'));
    });

    // Test that the fetchNotifications action is called on component mount
    it('should call fetchNotifications on componentDidMount', () => {
        const fetchNotificationsMock = jest.fn();
        shallow(<Notifications listNotifications={[]} fetchNotifications={fetchNotificationsMock} />);
        expect(fetchNotificationsMock).toHaveBeenCalled();
    });

    // Test that the markAsRead action is called when a notification is clicked
    it('should call markAsRead when a notification is clicked', () => {
        const markAsReadMock = jest.fn();
        const listNotifications = getUnreadNotificationsByType({ notifications: mockNotifications, filter: 'default' });
        const wrapper = shallow(
            <Notifications listNotifications={listNotifications} fetchNotifications={() => { }} markAsRead={markAsReadMock} />
        );
        wrapper.find('li').first().simulate('click');
        expect(markAsReadMock).toHaveBeenCalledWith(1);
    });

    // Test that the setNotificationFilter action is called when the urgent button is clicked
    it('should call setNotificationFilter with URGENT when the urgent button is clicked', () => {
        const setFilterMock = jest.fn();
        const wrapper = shallow(
            <Notifications listNotifications={[]} fetchNotifications={() => { }} setNotificationFilter={setFilterMock} />
        );
        wrapper.find('button').at(0).simulate('click');
        expect(setFilterMock).toHaveBeenCalledWith('urgent');
    });

    // Test that the setNotificationFilter action is called when the default button is clicked
    it('should call setNotificationFilter with DEFAULT when the default button is clicked', () => {
        const setFilterMock = jest.fn();
        const wrapper = shallow(
            <Notifications listNotifications={[]} fetchNotifications={() => { }} setNotificationFilter={setFilterMock} />
        );
        wrapper.find('button').at(1).simulate('click');
        expect(setFilterMock).toHaveBeenCalledWith('default');
    });
})