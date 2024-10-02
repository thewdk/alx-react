import { createSelector } from 'reselect';
import { List } from 'immutable';

/**
 * Selector to get course entities from the state.
 * This function takes the state as an argument and returns the course entities.
 */
const getCourseEntities = state => state.courses;

/**
 * Selector that uses getCourseEntities and returns a List.
 * This selector is created using createSelector from the reselect library.
 * It takes an array of input selectors and a function to transform the inputs into the final output.
 * In this case, the input selector is getCourseEntities, and the transformation function takes the courses and returns a List.
 */
export const getCoursesList = createSelector(
    [getCourseEntities], // Input selector
    (courses) => { // Transformation function
        // Return a List of courses
        return courses.valueSeq().toList();
    }
);