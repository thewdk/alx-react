import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';  // Import the stateless component

/**
 * Test suite for the Header component.
 * This suite groups related tests for the Header component.
 */
describe('Header Component', () => {
    /**
     * Test to check if the Header component renders without crashing.
     * It renders the Header component using shallow rendering and checks if the wrapper exists.
     */
    it('renders without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toBe(true);
    });
})