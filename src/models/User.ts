import { Schema, model,  Types, Document } from 'mongoose';
// import {isEmail} from 'validator';
import pkg from 'validator';
const { isEmail } = pkg;


interface IUser extends Document {
    username: string;
    email: string;
    thoughts?: Types.ObjectId[];
    friends:Types.ObjectId[];
}
//Mongoose create a new defaut _id if it is not specified. 

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
    {timestamps:true,
       toJSON: {virtuals:true,
      getters:true
    }, id:false
  }
    
)

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
IUserSchema.virtual('friendCount').get(function () {
    return this.friends?.length;
  });

const User = model<IUser>('User', IUserSchema);


export default User;
