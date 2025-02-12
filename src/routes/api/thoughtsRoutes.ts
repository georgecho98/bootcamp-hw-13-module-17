import { Router } from 'express';
const router = Router();


import { createReaction, createThought, deleteReaction, deletThought, getSingleThought, getThought, updateThought } from '../../controllers/thoughtsController.js';

// /api/thoughts
router.route('/').get(getThought).post(createThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId').get(getSingleThought)
                        .post(createThought)
                        .put(updateThought)

                        .delete(deletThought);

router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction);
export { router  as thoughtsRouter};
