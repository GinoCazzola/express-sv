import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date
    },
    userTypes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    deletedAt: {
        type: Date,
        required: false
    }
});

const User = model("User", UserSchema);

export default User;
