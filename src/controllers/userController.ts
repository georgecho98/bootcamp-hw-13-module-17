import { User } from '../models/index.js';
import { Request, Response } from 'express';


export const getUsers = async(_req:Request, res:Response) => {
  try {

    //wait for the promise
    const users= await User.find();
    //convert response to json format.
    res.json(users);
  }catch (err) {
    res.status(500).json(err);
  } };

  export const getSingleUser = async(req:Request, res:Response) => {
    try {
      const singleUser= await User.findOne({_id:req.params.id});
      
      if(!singleUser) {
        res.status(404).json({
          message: 'No user with that ID'
        }) } else{
      res.json(singleUser)

        } } 
        catch(err) {
          res.status(500).json(err)

        }
      }
      
    export const createUser = async(req:Request, res:Response) =>{
      try{
        const dbUser = await User.create(req.body);
        res.json(dbUser);
      }catch(err) {
        res.status(500).json(err)
      }
      }

    export const addUser = async (req: Request, res:Response) =>{
      try{
        const userNew= await User.replaceOne({_id:req.params.userId})
        if(!userNew) {
          res.status(404).json({
            message: 'No user with that ID'
          }) } else{
        res.json(userNew)
  
          } } 
          catch(err) {
            res.status(500).json(err)
            } }


    export const deletUser = async(req:Request, res:Response) =>{
      try{
        const deleuser = await User.deleteOne({_id:req.params.userId})
        if (!deleuser) {
          res.status(404).json({
            message: 'No user with that ID'
          }) } else{
        res.json(deleuser)
          } } 
          catch(err) {
            res.status(500).json(err)
      }
     }
  
     export const createFriend = async(req:Request, res:Response) =>{
      try{
        const dbFriend = await User.create({_id:req.params.friends});
        res.json(dbFriend);
      }catch(err) {
        res.status(500).json(err)
      }
      }

  
  
      export const deletFriend = async(req:Request, res:Response) =>{
        try{
          const delefriend = await User.deleteOne({_id:req.params.friends})
          if (!delefriend) {
            res.status(404).json({
              message: 'No user with that ID'
            }) } else{
          res.json(delefriend)
    
            } } 
            catch(err) {
              res.status(500).json(err)
          }
      }
  


