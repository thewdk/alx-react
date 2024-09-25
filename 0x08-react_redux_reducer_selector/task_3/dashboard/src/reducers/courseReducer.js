// src/reducers/courseReducer.js

import { FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';

const initialState = [];

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