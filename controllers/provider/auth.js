const User = require('../../models/User');
const bcrypt = require('bcryptjs')

exports.signup_get = (req, res) =>{
    res.render('provider/signup')
}

exports.signup_post = async (req, res) => {
    try {
        console.log(req.body)
        const user = new User(req.body)

        const hash = bcrypt.hashSync(req.body.password, 10)
        console.log(hash)

        user.password = hash
        // user.profile_image = "/uploads/" + req.file.filename;
        user.type='provider'
        await user.save()

        // res.redirect('/')
        res.json({"message": "User created successfuly"})
    } catch (error) {
        console.log(error.message)
        res.json({"message": "Error!"})
    }
}