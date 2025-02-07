import { Router } from 'express';
const router = Router();

import { getComments, getSingleComment, createComment } from '../../controllers/commentController.js';

// /api/comments
router.route('/api/thoughts/:thoughtId/reactions').get(getComments).post(createComment);

// /api/comments/:commentId
router.route('/api/thoughts/:thoughtId/reactions').post(getSingleComment);

router.route('/api/thoughts/:thoughtId/reactions/:reactionId').delete(getSingleComment);
export default router;
