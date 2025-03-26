import mongoose from "mongoose";

export const accountSchema = new mongoose.Schema({
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
    },
    details: {
        first_name: {
            type: String,
            minlength: 5,
            maxlength: 15,
            default: null,
        },

        middle_name: {
            type: String,
            minlength: 5,
            maxlength: 15,
            default: null,
        },

        last_name: {
            type: String,
            minlength: 5,
            maxlength: 15,
            default: null,
        },

        email: {
            type: String,
            default: null,
        }
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

export default accountSchema;