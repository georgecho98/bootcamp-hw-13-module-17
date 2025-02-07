import { Schema, Types, model, ObjectId, type Document } from 'mongoose';


interface Reaction extends Document {
    reactionId: ObjectId,
    reactionBody: string,
    username: String,
    createdAt: Date
}

const reactionSchema = new Schema<Reaction>({
    reactionId:{type: ObjectId, default: new Object},
    reactionBody: {type:String, required:true, maxlength:280},
    username: {type:String, required:true},
    createdAt: {type:Date, Timestamp: {currentTime:()=> Math.floor(Date.now()/1000)}}
    
}
)


export default reactionSchema;
