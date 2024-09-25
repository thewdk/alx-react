// Importing the normalized data entities from the notifications module.
import { entities } from './notifications';

// Describe block for testing the normalized data entities.
describe('Normalized Data', () => {
    // Test case to verify the correctness of the users entity.
    it('should contain correct users entity', () => {
        // Expecting that the user entity with a specific ID has the correct properties and values.
        expect(entities.users['5debd764a7c57c7839d722e9']).toEqual({
            id: '5debd764a7c57c7839d722e9',
            name: { first: 'Poole', last: 'Sanders' },
            email: 'poole.sanders@holberton.nz',
            picture: 'http://placehold.it/32x32',
            age: 25
        });
    });

    // Test case to verify the correctness of the messages entity.
    it('should contain correct messages entity', () => {
        // Expecting that the message entity with a specific GUID has the correct properties and values.
        expect(entities.messages['efb6c485-00f7-4fdf-97cc-5e12d14d6c41']).toEqual({
            guid: 'efb6c485-00f7-4fdf-97cc-5e12d14d6c41',
            isRead: false,
            type: 'default',
            value: 'Cursus risus at ultrices mi.'
        });
    });

    // Test case to verify the correctness of the notifications entity.
    it('should contain correct notifications entity', () => {
        // Expecting that the notification entity with a specific ID has the correct properties and values.
        expect(entities.notifications['5debd7642e815cd350407777']).toEqual({
            id: '5debd7642e815cd350407777',
            author: '5debd764f8452ef92346c772',
            context: '3068c575-d619-40af-bf12-dece1ee18dd3'
        });
    });
});