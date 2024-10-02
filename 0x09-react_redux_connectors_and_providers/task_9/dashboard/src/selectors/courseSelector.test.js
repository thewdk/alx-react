import { Map } from 'immutable';
import { getCoursesList } from './courseSelector';

describe('courseSelector', () => {
    // Test that the getCoursesList selector returns a List of course entities
    it('should return a List of course entities', () => {
        // Create a mock state with course entities
        const mockState = {
            courses: Map({
                course1: { id: 1, name: 'Course 1' },
                course2: { id: 2, name: 'Course 2' }
            })
        };

        // Define the expected list of courses
        const expectedList = [
            { id: 1, name: 'Course 1' },
            { id: 2, name: 'Course 2' }
        ];

        // Call the getCoursesList selector with the mock state
        const coursesList = getCoursesList(mockState);

        // Convert the coursesList to a plain JavaScript array using toJS()
        // and assert that it matches the expectedList
        expect(coursesList.toJS()).toEqual(expectedList);
    });

    // Test that the getCoursesList selector returns an empty List if no courses are present
    it('should return an empty List if no courses are present', () => {
        // Create a mock state with an empty courses Map
        const mockState = {
            courses: Map({})
        };

        // Define the expected list as an empty array
        const expectedList = [];

        // Call the getCoursesList selector with the mock state
        const coursesList = getCoursesList(mockState);

        // Convert the coursesList to a plain JavaScript array using toJS()
        // and assert that it matches the expectedList
        expect(coursesList.toJS()).toEqual(expectedList);
    });
})