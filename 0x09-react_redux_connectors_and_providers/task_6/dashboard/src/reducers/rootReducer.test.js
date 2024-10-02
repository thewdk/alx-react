import rootReducer from './reducers/rootReducer';
import { Map } from 'immutable';

/**
 * Test suite for the rootReducer function.
 * This suite contains tests to ensure the initial state structure is correct.
 */
describe('rootReducer', () => {
    /**
     * Test to check if the rootReducer initializes with the correct structure.
     * It calls the rootReducer with undefined state and an empty action,
     * and expects the initial state to have the expected structure with Immutable Maps.
     */
    it('should initialize with the correct structure', () => {
        const initialState = rootReducer(undefined, {});
        const expectedState = {
            courses: Map({}),
            notifications: Map({}),
            ui: Map({})
        };
        expect(initialState).toEqual(expectedState);
    });
});