import { User } from '../models/index.js';
import { Request, Response } from 'express';



// .populate("friends") – Replaces the friends field (which contains ObjectId references) with actual User documents.
// .populate("thoughts") – Replaces the thoughts field (which contains ObjectId references) with actual Thought documents.
export const getAllUsers = async(_req:Request, res:Response) => {
  try {
    
    //wait for the promise
    const users= await User.find().populate("friends").populate("thoughts");
    //convert response to json format.
    res.json(users);
  }catch (err) {
    res.status(500).json(err);
  } };


  //if the route calls for userId, req.params need to be userId. 
export const getSingleUser = async(req:Request, res:Response) => {
  const {userId} = req.params; 
  try {
      
      const singleUser= await User.findById(userId).populate("friends").populate("thoughts");
      
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
        await dbUser.save();
        res.json(dbUser);
      }catch(err) {
        res.status(500).json(err)
      }
      }

  export const updateUser = async (req: Request, res:Response) =>{
      
    const {userId} = req.params; 
    
    try{
        const userNew= await User.findByIdAndUpdate(userId,{ $set:req.body}, { new: true });
        if(!userNew) {
          res.status(404).json({
            message: 'No user with that ID'
          }) } else{
        res.json(userNew)
  
          } } 
          catch(err) {
            res.status(500).json(err)
            } }

//later may check if i need to delete the friends and thoughts
  export const deletUser = async(req:Request, res:Response) =>{
    const {userId} = req.params; 
      try{
        const deleuser = await User.findByIdAndDelete(userId)
        if (!deleuser) {
          res.status(404).json({
            message: 'No user with that ID'
          }) } 
          else{
        res.json(deleuser)
          } } 
          catch(err) {
            res.status(500).json(err)
      }
     }
  
     
// * `POST` to add a new friend to a user's friend list

  export const createFriend = async(req:Request, res:Response) =>{
    const {userId , friendId} = req.params; 
      try{
        const dbFriend = await User.findByIdAndUpdate( 
          userId,
          { $addToSet: { friends: friendId } },
          { new: true });
        res.json(dbFriend);
      }catch(err) {
        res.status(500).json(err)
      }
      }

  
  
      // * `DELETE` to remove a friend from a user's friend list
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>NOT WORKING
  export const deletFriend = async(req:Request, res:Response) =>{
    const {userId, friendId} = req.params;     
    try{
          const dbfriend = await User.findByIdAndUpdate(
            userId, 
            { $pull:{friends: friendId}},
            {new:true})


          if (!dbfriend) {

          res
            .status(404)
            .json({
              message: 'No user with that ID'
            });
            return;
          } 
                                  
            res.json(dbfriend)
    
            } 
            catch(err) {
            res.status(500).json(err)
          }
      }
  


