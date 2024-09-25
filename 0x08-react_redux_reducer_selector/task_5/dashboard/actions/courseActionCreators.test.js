import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('courseActionCreators', () => {
    it('verifies the return of selectCourse', () => {
        const expected = {
            type: SELECT_COURSE,
            index: 1,
        };
        const actual = selectCourse(1);

        expect(actual).toEqual(expected);
    });

    it('verifies the return on unSelectCourse', () => {
        const expected = {
            type: UNSELECT_COURSE,
            index: 1,
        };
        const actual = unSelectCourse(1);
        expect(actual).toEqual(expected);
    });
});