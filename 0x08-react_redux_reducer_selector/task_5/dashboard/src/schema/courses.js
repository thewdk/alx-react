import * as normalizr from 'normalizr';

// Define the course schema
const courseSchema = new normalizr.schema.Entity(
    'courses',
    {},
    { idAttribute: 'id' }
);

// Define the normalizer function
export const coursesNormalizer = (data) => normalizr.normalize(data, [courseSchema]);