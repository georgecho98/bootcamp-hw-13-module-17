import { Schema, Types, model, type Document} from 'mongoose';
import reactionSchema from './Reaction.js'
import {IReaction} from  './Reaction.js'

interface IThought extends Document {
    thoughtText: string,
    createdAt:  Date,
    username: string,
    reactions: Types.DocumentArray<IReaction>
}

const thoughtSchema = new Schema<IThought>({
    thoughtText:{type:String, required:true,maxlength:280},
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (value: any) => {
        return value.toLocaleString('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });
      }},
    username:  {type: String, ref:'User', required:true},
    reactions:[reactionSchema],            
        },
    { 
        timestamps: true,
        toJSON: {virtuals:true,
                getters:true}, 
                id:false
    }
)

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

const Thought= model<IThought>('Thought', thoughtSchema);



//This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.

export default Thought;
