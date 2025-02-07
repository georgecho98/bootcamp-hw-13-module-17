import { Router } from 'express';
const router = Router();

import { getSinglePost, getPosts, createPost } from '../../controllers/postController.js';

router.route('/users').get(getPosts).post(createPost);

router.route('/:_id').get(getSinglePost);

router.route('/:_id').post(getSinglePost);

router.route('/:_id').put(getSinglePost);

router.route('/:_id').delete(getSinglePost);


router.route('/users/:userId/friends/:friendId').get(getPosts).post(createPost);

router.route('/users/:userId/friends/:friendId').post(getSinglePost);

router.route('/users/:userId/friends/:friendId').delete(getSinglePost);

export default router;
