import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true,
        minlength: 5,
        maxlength: 15
    },
    password: {
        type: String,
        require: true,
        trim: true,
        minlength: 5,
        maxlength: 15
    },
    user_type:{
        type: String,
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: ()=>{new Date},
    }
})

export default mongoose.model("Accounts", accountSchema, "Accounts");