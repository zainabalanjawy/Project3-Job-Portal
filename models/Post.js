const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    jobTitle: String,
    jobNature: String,
    requirement: String,
    description: String,
    responsibilities: String,
    Salary: Number,
    Location: String
},{
    timestamps: true
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post