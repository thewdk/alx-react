import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { selectCourse, unSelectCourse, fetchCourses, setCourses } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE, SET_COURSES } from './courseActionTypes';

// Configure a mock Redux store with the thunk middleware
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('action creators tests', () => {
    // Restore the fetch mock after each test
    afterEach(() => {
        fetchMock.restore();
    });

    // Test that the selectCourse action creator returns the correct action object
    it('selectCourse should return the correct action object', () => {
        const expectedAction = { type: SELECT_COURSE, index: 1 };
        expect(selectCourse(1)).toEqual(expectedAction);
    });

    // Test that the unSelectCourse action creator returns the correct action object
    it('unSelectCourse should return the correct action object', () => {
        const expectedAction = { type: UNSELECT_COURSE, index: 1 };
        expect(unSelectCourse(1)).toEqual(expectedAction);
    });

    // Test that the fetchCourses async action creator dispatches the setCourses action after fetching
    it('fetchCourses should dispatch setCourses action after fetching', () => {
        // Define mock course data
        const mockCourses = [
            { id: 1, name: 'Course 1' },
            { id: 2, name: 'Course 2' }
        ];

        // Set up the fetch mock to return the mock course data
        fetchMock.getOnce('/dist/courses.json', {
            body: mockCourses,
            headers: { 'content-type': 'application/json' }
        });

        // Define the expected actions
        const expectedActions = [
            { type: SET_COURSES, courses: mockCourses }
        ];

        // Create a mock store
        const store = mockStore({ courses: [] });

        // Dispatch the fetchCourses action and assert that the expected actions are dispatched
        return store.dispatch(fetchCourses()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
})