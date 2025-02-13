import { Thought } from '../models/index.js';
import { Request, Response } from 'express';


export const getThought = async (_req: Request, res: Response) => {
  try {

    //wait for the promise
    const thought = await Thought.find();
    //convert response to json format.
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getSingleThought = async (req: Request, res: Response) => {
  const { thoughtId } = req.params;
  try {
    const SingleThought = await Thought.findById(thoughtId);

    if (!SingleThought) {
      res.status(404).json({
        message: 'No user with that ID'
      })
    } else {
      res.json(SingleThought)

    }
  }
  catch (err) {
    res.status(500).json(err)

  }
}

export const createThought = async (req: Request, res: Response) => {
  
  try {
    const dbThought = await Thought.create(req.body);
    // User.push(dbThought._id);
    
    res.json(dbThought);
  } catch (err) {
    res.status(500).json(err)
  }
}

//hhhhh
export const updateThought = async (req: Request, res: Response) => {
  const { thoughtId } = req.params;
  try {
    const updatethought = await Thought.findByIdAndUpdate(
      thoughtId , // Use thoughtId instead of _id
       { $set: req.body }, // Include the updated data from the request body
      { new: true } // Return the updated document
    );




    if (!updatethought) {
      res.status(404).json({
        message: 'No user with that ID'
      })
    } else {
      res.json(updatethought)

    }
  }
  catch (err) {
    res.status(500).json(err)
  }
}


export const deletThought = async (req: Request, res: Response) => {
  const { thoughtId } = req.params;
  try {
    const deletedthought = await Thought.findByIdAndDelete(thoughtId )

    if (!deletedthought) {
      res.status(404).json({
        message: 'No user with that ID'
      })
    } else {

      
      res.json(deletedthought)
    }
  }
  catch (err) {
    res.status(500).json(err)
  }
}


export const createReaction = async (req: Request, res: Response) => {
  const { thoughtId } = req.params;
  try {
    const thought = await Thought.findById(thoughtId); // Find the thought by ID
    if (!thought) {
      res.status(404).json({ message: 'No thought found with that ID' }); // Handle case where thought is not found
      return 
    }

    thought.reactions.push(req.body)


    
    // Create a reaction and push it into the thought's reactions array
    
    await thought.save(); // Save the updated thought

    res.json(thought); // Respond with the updated thought
  } catch (err) {
    res.status(500).json(err); // Handle error
  }
};




export const deleteReaction = async (req: Request, res: Response) => {
  const { thoughtId } = req.params;
  try {
    const thought = await Thought.findById(thoughtId); // Find the thought by ID

    if (!thought) {
      res.status(404).json({ message: 'No thought found with that ID' }); // Handle case where thought is not found
      return 
    }

    // Filter out the reaction by its ID from the reactions array
    // thought.reactions = thought.reactions.filter(reaction => reaction.reactionId.toString() !== req.params.reactionId);
    thought.reactions.pull({ reactionId: req.params.reactionId });

    await thought.save(); // Save the updated thought

    res.json(thought); // Respond with the updated thought
  } catch (err) {
    res.status(500).json(err); // Handle error
  }
};
