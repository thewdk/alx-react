import * as notifications from '../../../notifications.json';
import { normalize, schema } from 'normalizr';

// Define a user's schema
// no shape for the user yet, but every author should be a user
const user = new schema.Entity('users');
// Define a message's schema
// no shape for the message either, but idAttribute is the key where this entities unique id can be found
const message = new schema.Entity('messages', {}, {idAttribute: 'guid'});
// Build a notification's schema
// Every author is a user, every context is a message
// Here's an example
// {
//     "id": "5debd76480edafc8af244228",
//         "author": {
//         "id": "5debd764a7c57c7839d722e9",
//             "name": {
//             "first": "Poole",
//                 "last": "Sanders";
//         },
//         "email": "poole.sanders@holberton.nz",
//         "picture": "http://placehold.it/32x32",
//         "age": 25;
//     },
//     "context": {
//         "guid": "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
//         "isRead": true,
//         "type": "urgent",
//         "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.";
//     }
// },
const notification_ = new schema.Entity('notifications',{
    author: user,
    context: message
});
// define a schema as an array of the notification schema
const mySchema = [notification_];
// export the normalized data
export const normalizedData = normalize(notifications.default, mySchema);
// It should look like
// [
//     "5debd76480edafc8af244228",
//     "5debd764507712e7a1307303",
//      ...
// ]

export function getAllNotificationsByUser(userId) {
    return notifications.default
        .filter((notification) => userId === notification.author.id)
        .map((notification) => notification.context);
}