import { Router } from 'express';
const router = Router();

import { getSingleUser, getUsers, createUser, deletUser, createFriend, deletFriend, updateUser } from '../../controllers/userController.js';
//`GET` all users //api/users
router.route('/').get(getUsers).post(createUser);


//`a single user by its `_id` and populated thought and friend data
// api/users/:userId

router.route('/:userId').get(getSingleUser)
                        
                        .put(updateUser)
                        .delete(deletUser);
                        

// **`/api/users/:userId/friends/:friendId`**

// * `POST` to add a new friend to a user's friend list

router.route('/:userId/friends/:friendId').post(createFriend).delete(deletFriend);

// * `DELETE` to remove a friend from a user's friend list


export { router  as usersRouter};
