import { Router } from 'express';
const router = Router();
import { createReaction, createThought, deletReaction, deletThought, getSingleThought, getThought, updateThought } from '../../controllers/thoughtsController.js';
// /api/comments
router.route('/').get(getThought).post(createThought);
// /api/comments/:commentId
router.route('/:thoughtId').get(getSingleThought)
    .post(createThought)
    .put(updateThought)
    .delete(deletThought);
router.route('/:thoughtId/reactions').post(createReaction).delete(deletReaction);
export default router;
