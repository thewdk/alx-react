import courseReducer from './courseReducer';
import { Map } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
    it('FETCH_COURSE_SUCCESS should update the data with the normalized courses', () => {
        const initialState = Map({
            isLoading: false,
            data: {},
            selectedCourse: null,
        });

        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: {
                entities: {
                    courses: {
                        1: { id: 1, name: 'Course 1' },
                        2: { id: 2, name: 'Course 2' },
                    },
                },
            },
        };

        const expectedState = Map({
            isLoading: false,
            data: {
                1: { id: 1, name: 'Course 1' },
                2: { id: 2, name: 'Course 2' },
            },
            selectedCourse: null,
        });

        const newState = courseReducer(initialState, action);
        expect(newState.toJS()).toEqual(expectedState.toJS());
    });

    // ... other test cases
});