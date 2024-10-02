import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

import { bindActionCreators } from 'redux';

export const selectCourse = index => ({
    type: SELECT_COURSE,
    index
});

export const unSelectCourse = index => ({
    type: UNSELECT_COURSE,
    index
});

// Bind action creators to dispatch function
export const boundSelectCourse = index => dispatch => bindActionCreators(selectCourse, dispatch)(index);
export const boundUnselectCourse = index => dispatch => bindActionCreators(unSelectCourse, dispatch)(index);