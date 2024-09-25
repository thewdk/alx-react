// src/reducers/courseReducer.js

import * as data from '../../notifications.json';
import { coursesNormalizer } from '../schema/courses';
import { Map, setIn, merge } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

const initialState = Map({
    isLoading: false,
    data: coursesNormalizer(data.default.courses).entities.courses,
    selectedCourse: null,
});

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            const courses = action.data.map(course => ({
                ...course,
                isSelected: false
            }));
            return courses;
        case SELECT_COURSE:
            const selectedIndex = action.index;
            return state.map((course, index) => {
                if (index === selectedIndex) {
                    return {
                        ...course,
                        isSelected: true
                    };
                }
                return course;
            });
        case UNSELECT_COURSE:
            const unselectedIndex = action.index;
            return state.map((course, index) => {
                if (index === unselectedIndex) {
                    return {
                        ...course,
                        isSelected: false
                    };
                }
                return course;
            });
        default:
            return state;
    }
};

export default courseReducer;