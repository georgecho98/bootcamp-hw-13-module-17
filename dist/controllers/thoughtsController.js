import { Thought } from '../models/index.js';
export const getThought = async (_req, res) => {
    try {
        //wait for the promise
        const thought = await Thought.find();
        //convert response to json format.
        res.json(thought);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const getSingleThought = async (req, res) => {
    try {
        const SingleThought = await Thought.findById(req.params.thoughtId);
        if (!SingleThought) {
            res.status(404).json({
                message: 'No user with that ID'
            });
        }
        else {
            res.json(SingleThought);
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const createThought = async (req, res) => {
    try {
        const dbThought = await Thought.create(req.body);
        res.json(dbThought);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const updateThought = async (req, res) => {
    try {
        const updatethought = await Thought.findByIdAndUpdate(req.params.thoughtId, // Use thoughtId instead of _id
        { $push: { reactions: req.body } }, // Include the updated data from the request body
        { new: true } // Return the updated document
        );
        if (!updatethought) {
            res.status(404).json({
                message: 'No user with that ID'
            });
        }
        else {
            res.json(updatethought);
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const deletThought = async (req, res) => {
    try {
        const deletedthought = await Thought.findByIdAndDelete({ _id: req.params.thoughtId });
        if (!deletedthought) {
            res.status(404).json({
                message: 'No user with that ID'
            });
        }
        else {
            res.json(deletedthought);
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const createReaction = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId); // Find the thought by ID
        if (!thought) {
            res.status(404).json({ message: 'No thought found with that ID' }); // Handle case where thought is not found
            return;
        }
        // Create a reaction and push it into the thought's reactions array
        thought.reactions.push(req.body); // Assuming req.body contains the reaction data
        await thought.save(); // Save the updated thought
        res.json(thought); // Respond with the updated thought
    }
    catch (err) {
        res.status(500).json(err); // Handle error
    }
};
export const deleteReaction = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId); // Find the thought by ID
        if (!thought) {
            res.status(404).json({ message: 'No thought found with that ID' }); // Handle case where thought is not found
            return;
        }
        // Filter out the reaction by its ID from the reactions array
        // thought.reactions = thought.reactions.filter(reaction => reaction.reactionId.toString() !== req.params.reactionId);
        thought.reactions.pull({ reactionId: req.params.reactionId });
        await thought.save(); // Save the updated thought
        res.json(thought); // Respond with the updated thought
    }
    catch (err) {
        res.status(500).json(err); // Handle error
    }
};
