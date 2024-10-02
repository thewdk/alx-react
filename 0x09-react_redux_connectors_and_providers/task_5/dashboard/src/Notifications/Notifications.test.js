import React from 'react';
import { shallow } from 'enzyme';
import { Notifications, mapStateToProps, mapDispatchToProps } from './Notifications';
import configureMockStore from 'redux-mock-store';

/**
 * Test suite for the Notifications component and its Redux mappings.
 * This suite covers testing the Notifications component, mapStateToProps, and mapDispatchToProps functions.
 */
describe('Notifications Component and Redux Mappings', () => {
    /**
     * Test for the Notifications component rendering.
     * It checks if the Notifications component renders without crashing.
     */
    it('renders Notifications component without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });

    /**
     * Test for the mapStateToProps function.
     * It checks if the mapStateToProps function correctly maps the Redux state to component props.
     */
    it('maps state to props correctly using mapStateToProps', () => {
        const mockState = {
            notifications: {
                notifications: [{ id: 1, message: 'Test Notification' }]
            }
        };
        const mappedProps = mapStateToProps(mockState);
        expect(mappedProps.listNotifications).toEqual(mockState.notifications.notifications);
    });

    /**
     * Test for the mapDispatchToProps function.
     * It checks if the mapDispatchToProps function correctly maps the action creators to component props.
     */
    it('maps dispatch to props correctly using mapDispatchToProps', () => {
        const mockDispatch = jest.fn();
        const mappedProps = mapDispatchToProps(mockDispatch);
        mappedProps.fetchNotifications();
        expect(mockDispatch).toHaveBeenCalled();
    });
});