import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Please Provide an first name'],
    },
    lastname: {
        type: String,
        required: [true, 'Please Provide your last name'],
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
    otp: String
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User