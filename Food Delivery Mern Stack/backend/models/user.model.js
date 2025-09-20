import mongoose from "mongoose";
import { use } from "react";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    // to ensure same email cant crate user again make it unique
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    mobile: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "owner", "deliveryBoy"],
        required: true
    }
}, { timestamps: true })

// added timestamp to see when data is added 

const User = mongoose.model("User", userSchema);

export default User;