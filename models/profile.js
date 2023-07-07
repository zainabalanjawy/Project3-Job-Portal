const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const profileSchema = mongoose.Schema({
    CV : {
        type: String,
        
    },
    Edication: {
        type: String,
        required: true,
    },
    Experince: {
        type: String,
        required: true,
    },
    user: [{
        
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
 } ]
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile