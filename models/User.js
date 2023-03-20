const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    gender:{
        type: String,
        enum: ['M','F','NA']
    },
    age:{
        type: Number
    },
    collegeAddr:{
        type: String
    },
    branch: {
        type: String
    },
    skills: {
        type: Array
    },
    resume: {
        type: String
    }
})

module.exports = mongoose.model('User',UserSchema);