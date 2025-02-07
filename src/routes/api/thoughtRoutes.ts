import { Router } from 'express';
const router = Router();

import { getComments, getSingleComment, createComment } from '../../controllers/commentController.js';

// /api/comments
router.route('/thoughts').get(getComments).post(createComment);

// /api/comments/:commentId
router.route('/thoughts').get(getSingleComment);
router.route('/thoughts/:_id').get(getSingleComment);
router.route('/thoughts/:_id').post(getSingleComment);

router.route('/thoughts/:_id').put(getSingleComment);
router.route('/thoughts/:_id').delete(getSingleComment);
export default router;
