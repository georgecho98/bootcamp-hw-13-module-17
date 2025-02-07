import { Schema, Types, model, ObjectId, type Document } from 'mongoose';

import Reaction from './Reaction'

interface Thought extends Document {
    thoughtText: String,
    createdAt: String,
    username: String,
    reactions: String[]
}

const thoughtSchema = new Schema<Thought>({
    thoughtText:{type:String, required:true,maxlength:280},
    createdAt: {
        type:Date, 
        default:trim, 
        getter:},
    username: {type:String, required:true},
    reactions: [{type: [],ref:'Reaction'} ]},
    {   toJSON: {virtuals:true,}
    }
    
)

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions?.length;
  });

const Thought= model<Thought>('Thought', thoughtSchema);

export default Thought;
