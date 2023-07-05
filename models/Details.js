const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const detalisSchema = mongoose.Schema({
    About: {
        type: String,
        required: true,
    },
    Location: {
        type: String,
        required: true,
    }
})

const Details = mongoose.model('Details', detalisSchema)

module.exports = Details