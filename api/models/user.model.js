import mongoose from "mongoose";

// Schema / Rules
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true  
    },
    dateOfBirth: {
        type: String,
        required: true, 
    },
    phone: {
        type: String,
        required: true, 
    },
    state: {
        type: String,
        required: true, 
    },
    privacy: {
        type: Boolean,
        required: true,
    }

}, { timestamps: true });

const User = mongoose.model('User', userSchema); 

export default User; 