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
    },
    user: [{
        
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
} ]

})

const Details = mongoose.model('Details', detalisSchema)

module.exports = Details