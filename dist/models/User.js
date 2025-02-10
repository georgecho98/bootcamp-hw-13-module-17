import { Schema, model } from 'mongoose';
import { isEmail } from 'validator';
const IUserSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, validate: [isEmail, 'Please put in a valid email'] },
    thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }],
    friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
}, { toJSON: { virtuals: true, }
});
// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
IUserSchema.virtual('friendCount').get(function () {
    var _a;
    return (_a = this.friends) === null || _a === void 0 ? void 0 : _a.length;
});
const User = model('User', IUserSchema);
export default User;
