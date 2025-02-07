import { Schema, Types, model, ObjectId, type Document } from 'mongoose';
import {isEmail} from 'validator';
import Reaction from './Reaction.js';
import Thought from './Thought.js';

interface IUser extends Document {
    username: string;
    email: string;
    thoughts?: Thought.Types.ObjectId[];
    friends: Schema.Types.ObjectId[];
}


const IUserSchema = new Schema<IUser>({
    username :{type:String, required:true, unique: true, Trim: true},
    email: {type:String, required:true, unique: true, validate: [isEmail,'Please put in a valide email']},
    thoughts: [{
        type: Thought.ObjectId,
        ref:'thoughts'
    }], 
    friends: [{
        type: Schema.ObjectId,
        ref:'friends'
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
