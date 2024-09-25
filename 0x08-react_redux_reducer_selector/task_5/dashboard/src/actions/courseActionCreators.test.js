import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('action creators tests', () => {
    it('selectCourse should return the correct action object', () => {
        const expectedAction = { type: SELECT_COURSE, index: 1 };
        expect(selectCourse(1)).toEqual(expectedAction);
    });

    it('unSelectCourse should return the correct action object', () => {
        const expectedAction = { type: UNSELECT_COURSE, index: 1 };
        expect(unSelectCourse(1)).toEqual(expectedAction);
    });
});