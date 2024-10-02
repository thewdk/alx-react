import { SELECT_COURSE, UNSELECT_COURSE, SET_COURSES } from './courseActionTypes';
import { bindActionCreators } from 'redux';

/**
 * Action creators for course-related actions.
 */

// Action creator to select a course by index
export const selectCourse = index => ({
    type: SELECT_COURSE,
    index
});

// Action creator to unselect a course by index
export const unSelectCourse = index => ({
    type: UNSELECT_COURSE,
    index
});

// Action creator to set courses with data
export const setCourses = (courses) => ({
    type: SET_COURSES,
    courses
});

/**
 * Async action creator to fetch courses from an API endpoint.
 * This action is asynchronous and uses async/await to fetch data.
 */
export const fetchCourses = () => {
    return async (dispatch) => {
        const response = await fetch('/dist/courses.json'); // Assuming the courses.json file is in the dist folder
        const data = await response.json();
        dispatch(setCourses(data));
    };
};

/**
 * Bind action creators to the dispatch function.
 * These bound action creators simplify the process of dispatching actions.
 */
export const boundSelectCourse = index => dispatch => bindActionCreators(selectCourse, dispatch)(index);
export const boundUnselectCourse = index => dispatch => bindActionCreators(unSelectCourse, dispatch)(index);