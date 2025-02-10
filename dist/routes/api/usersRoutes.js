import { Router } from 'express';
const router = Router();
import { getSingleUser, getUsers, createUser, addUser, deletUser, createFriend, deletFriend } from '../../controllers/userController.js';
//`GET` all users
router.route('/').get(getUsers);
//`a single user by its `_id` and populated thought and friend data
router.route('/:userId').get(getSingleUser)
    .post(createUser)
    .put(addUser)
    .delete(deletUser);
//* `POST` a new user (note that the examples below are just sample data):
//`PUT` to update a user by its `_id`
//`DELETE` to remove user by its `_id`
// **`/api/users/:userId/friends/:friendId`**
// * `POST` to add a new friend to a user's friend list
router.route('/:userId/friends/:friendId').post(createFriend).delete(deletFriend);
// * `DELETE` to remove a friend from a user's friend list
export default router;
