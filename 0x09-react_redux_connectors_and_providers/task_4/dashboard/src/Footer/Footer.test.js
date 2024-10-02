import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';  // Import the stateless component

/**
 * Test suite for the Footer component.
 * This suite groups related tests for the Footer component.
 */
describe('Footer Component', () => {
    /**
     * Test to check if the Footer component renders without crashing.
     * It renders the Footer component using shallow rendering and checks if the wrapper exists.
     */
    it('renders without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toBe(true);
    });
})