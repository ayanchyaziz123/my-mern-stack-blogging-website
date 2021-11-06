const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    is_admin: {
        type: Boolean,
        required: true,
        default: false
    },
    is_author: {
        type: Boolean,
        required: true,
        default: true
    }
    ,
    is_active: {
        type: Boolean
    },
    last_login: {
        type: Date
    },
    date_joined: {
        type: Date
    }
}, { timestamps: true })

const user = mongoose.model("user", userSchema);
models.export = user;