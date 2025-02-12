import { User } from '../models/index.js';
export const getUsers = async (_req, res) => {
    try {
        //wait for the promise
        const users = await User.find();
        //convert response to json format.
        res.json(users);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const getSingleUser = async (req, res) => {
    try {
        const singleUser = await User.findById({ _id: req.params.userId });
        if (!singleUser) {
            res.status(404).json({
                message: 'No user with that ID'
            });
        }
        else {
            res.json(singleUser);
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const createUser = async (req, res) => {
    try {
        const dbUser = await User.create(req.body);
        res.json(dbUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const updateUser = async (req, res) => {
    try {
        const userNew = await User.findByIdAndUpdate({ _id: req.params.userId }, req.body, { new: true });
        if (!userNew) {
            res.status(404).json({
                message: 'No user with that ID'
            });
        }
        else {
            res.json(userNew);
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const deletUser = async (req, res) => {
    try {
        const deleuser = await User.findByIdAndDelete({ _id: req.params.userId });
        if (!deleuser) {
            res.status(404).json({
                message: 'No user with that ID'
            });
        }
        else {
            res.json(deleuser);
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// * `POST` to add a new friend to a user's friend list
export const createFriend = async (req, res) => {
    try {
        const dbFriend = await User.findByIdAndUpdate(req.params.userId, { $addToSet: { friends: req.params.friendId } }, { new: true });
        res.json(dbFriend);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// * `DELETE` to remove a friend from a user's friend list
export const deletFriend = async (req, res) => {
    try {
        const delefriend = await User.findByIdAndUpdate(req.params.userId, { $pull: { friends: req.params.friendId } }, { new: true });
        if (!delefriend) {
            res.status(404).json({
                message: 'No user with that ID'
            });
        }
        else {
            res.json(delefriend);
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
};
