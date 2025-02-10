import { Schema, model, ObjectId, type Document } from 'mongoose';
import {isEmail} from 'validator';

import Thought from './Thought.js';

interface IUser extends Document {
    username: string;
    email: string;
    thoughts?: ObjectId[];
    friends: ObjectId[];
}


const IUserSchema = new Schema<IUser>({
    username :{type:String, required:true, unique: true, trim: true},
    email: {type:String, required:true, unique: true, validate: [isEmail,'Please put in a valid email']},
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref:'Thought'
    }], 
    friends: [{
        type: Schema.Types.ObjectId,
        ref:'User'
    }], 
},
    {   toJSON: {virtuals:true,}
    }
    
)

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
IUserSchema.virtual('friendCount').get(function () {
    return this.friends?.length;
  });

const User = model<IUser>('User', IUserSchema);

export default User;
