import { Schema, model } from 'mongoose';
const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, maxlength: 280 },
    createdAt: {
        type: Date,
        Timestamp: { currentTime: () => Math.floor(Date.now() / 1000) }
    },
    username: { type: String, required: true },
    reactions: {
        reactionId: { type: Schema.ObjectId, default: new Object },
        reactionBody: { type: String, required: true, maxlength: 280 },
        username: { type: String, required: true },
        createdAt: { type: Date, Timestamp: { currentTime: () => Math.floor(Date.now() / 1000) } }
    }
}, { toJSON: { virtuals: true, }
});
// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
const Thought = model('Thought', thoughtSchema);
//This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.
export default Thought;
