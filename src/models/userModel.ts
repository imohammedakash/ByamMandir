import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'Please Provide an username'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please Provide an Email'],
    },
    password: {
        type: String,
        required: [true, 'Please Provide an password'],
    },
    isverified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgetPasswordToken: String,
    forgetPasswordTokenExpiry: Date,
    verifyToken: String,
    veryifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User