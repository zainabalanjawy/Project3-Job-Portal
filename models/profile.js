const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const profileSchema = mongoose.Schema({
    CV : {
        type: String,
        required: true,
    },
    Edication: {
        type: String,
        required: true,
    },
    Experince: {
        type: String,
        required: true,
    }
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile