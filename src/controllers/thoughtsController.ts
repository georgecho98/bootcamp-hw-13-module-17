import { Thought } from '../models/index.js';
import { Request, Response } from 'express';


export const getThought = async(_req:Request, res:Response) => {
  try {

    //wait for the promise
    const thought= await Thought.find();
    //convert response to json format.
    res.json(thought);
  }catch (err) {
    res.status(500).json(err);
  } };

  export const getSingleThought = async(req:Request, res:Response) => {
    try {
      const SingleThought= await Thought.findOne({_id:req.params.userId});
      
      if(!SingleThought) {
        res.status(404).json({
          message: 'No user with that ID'
        }) } else{
      res.json(SingleThought)

        } } 
        catch(err) {
          res.status(500).json(err)

        }
      }
      
    export const createThought = async(req:Request, res:Response) =>{
      try{
        const dbThought = await Thought.create(req.body);
        res.json(dbThought);
      }catch(err) {
        res.status(500).json(err)
      }
      }

    export const updateThought = async (req: Request, res:Response) =>{
      try{
        const updatethought= await Thought.replaceOne({_id:req.params._id})
        if(!updatethought) {
          res.status(404).json({
            message: 'No user with that ID'
          }) } else{
        res.json(updatethought)
  
          } } 
          catch(err) {
            res.status(500).json(err)
            } }


    export const deletThought = async(req:Request, res:Response) =>{
      try{
        const deletthought = await Thought.deleteOne({_id:req.params._id})
        if (!deletthought) {
          res.status(404).json({
            message: 'No user with that ID'
          }) } else{
        res.json(deletthought)
          } } 
          catch(err) {
            res.status(500).json(err)
      }
     }
  
     export const createReaction = async(req:Request, res:Response) =>{
      try{
        const dbReaction = await Thought.create({_id:req.params.reactionId});
        res.json(dbReaction);
      }catch(err) {
        res.status(500).json(err)
      }
      }

  
  
      export const deletReaction = async(req:Request, res:Response) =>{
        try{
          const delereaction = await Thought.deleteOne({_id:req.params.reactionId})
          if (!delereaction) {
            res.status(404).json({
              message: 'No user with that ID'
            }) } else{
          res.json(delereaction)
    
            } } 
            catch(err) {
              res.status(500).json(err)
          }
      }
  


