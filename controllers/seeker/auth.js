const User = require('../../models/User');
const bcrypt = require('bcryptjs')

exports.signup_get = (req, res) =>{
    res.render('seeker/signup')
}

exports.signup_post = async (req, res) => {
    try {
        console.log(req.body)
        //console.log("file",req.file)
        const user = new User(req.body)
        //console.log('fileeeeeeenameeeeeeeee', req.filename);
        //console.log('fileeeeeee', req.file.filename);
        const hash = bcrypt.hashSync(req.body.password, 10)
        console.log(hash)

        user.password = hash
        //user.profile_image = url + '/public/' + req.file.filename
        user.type='seeker'
        await user.save()

        // res.redirect('/')
        res.json({"message": "User created successfuly"})
    } catch (error) {
        console.log(error.message)
        res.json({"message": "Error!"})
    }
}