import { Schema, model } from 'mongoose';
import Reaction from './Reaction.js';
const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, maxlength: 280 },
    createdAt: {
        type: Date,
        default: Date.now(),
        get: (value) => {
            return value.toLocaleString('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });
        }
    },
    username: { type: String, required: true },
    reactions: [Reaction],
}, {
    timestamps: true,
    toJSON: { virtuals: true,
        getters: true },
    id: false
});
// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
const Thought = model('Thought', thoughtSchema);
//This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.
export default Thought;
