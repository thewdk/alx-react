import { mapStateToProps } from './App';

describe('mapStateToProps', () => {
    it('returns the correct object for a logged-in user', () => {
        let state = fromJS({
            isUserLoggedIn: true
        });
        const expectedProps = mapStateToProps(state);
        expect(expectedProps).toEqual({ isLoggedIn: true });
    });
});