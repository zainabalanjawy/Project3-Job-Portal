const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        minlength: [2, 'Name must be 2 or more characters'],
        maxlength: [60, 'Name cannot be more than 60 characters']
    },
    username: {
        type: String,
        required: true,
        minlength: [2, 'Username must be 2 or more characters'],
        maxlength: [60, 'Username cannot be more than 60 characters']
    },
    phone: {
        type: String,
        required: true,
        minlength: [8, 'Phone must be 8 or more characters'],
        maxlength: [12, 'Phone cannot be more than 12 characters']
    },
    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }, 
    profile_image: String,
    type:{
        type: String,
    }
},{
    timestamps: true
})

userSchema.methods.verifyPassword = function(password){
    console.log('Verifying Password: ', password)
    return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model('User', userSchema)

module.exports = User