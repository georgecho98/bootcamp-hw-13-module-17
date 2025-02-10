import mongoose from 'mongoose';
const db = async () => {
    try {
        // await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentsDB');
        // const connectionStringURI = `mongodb+srv://Project:09-Ins_CRUD-Update@cluster0.ysx3s.mongodb.net`;
        await mongoose.connect(`mongodb+srv://Project:09-Ins_CRUD-Update@cluster0.ysx3s.mongodb.net/socialnetwork`);
        console.log('Database connected.');
        return mongoose.connection;
    }
    catch (error) {
        console.error('Database connection error:', error);
        throw new Error('Database connection failed.');
    }
};
export default db;
