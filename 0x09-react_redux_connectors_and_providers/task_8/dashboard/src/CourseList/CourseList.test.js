import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import CourseList from './CourseList';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { getCoursesList } from '../selectors/courseSelector';

// Configure a mock Redux store with the thunk middleware
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('CourseList Component', () => {
    let store;

    // Set up the mock store before each test
    beforeEach(() => {
        store = mockStore({
            courses: []
        });
        store.dispatch = jest.fn();
    });

    // Test that the fetchCourses action is dispatched when the component is mounted
    it('should dispatch fetchCourses action when component is mounted', () => {
        shallow(
            <Provider store={store}>
                <CourseList />
            </Provider>
        );
        expect(store.dispatch).toHaveBeenCalledWith(fetchCourses());
    });

    // Test that the selectCourse and unSelectCourse actions are dispatched appropriately
    it('should dispatch selectCourse and unSelectCourse actions appropriately', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <CourseList />
            </Provider>
        ).dive().dive();

        const instance = wrapper.instance();

        // Test for selecting a course
        instance.onChangeRow('1', true);
        expect(store.dispatch).toHaveBeenCalledWith(selectCourse('1'));

        // Test for unselecting a course
        instance.onChangeRow('1', false);
        expect(store.dispatch).toHaveBeenCalledWith(unSelectCourse('1'));
    });
})