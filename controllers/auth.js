
const User = require('../models/User');
const bcrypt = require('bcryptjs')

exports.signin_get = (req, res) =>{
    res.render('home/signin')
}

// 1- Call the dependincy jsonwebtoken
const jwt = require("jsonwebtoken")

exports.signin_post = async (req,res)=>{
    // 2- Set email, password with the body 
    let {emailAddress, password} = req.body;

    //3- Search for user with emailAddress
    try
    {
        let user = await User.findOne({emailAddress})
        console.log(user)
        if(!user)
        return res.json("User not found!").status(400)
        
        //4- Password comperassion 
        const isMatch = await bcrypt.compareSync(password, user.password)
        if(!isMatch)
        return res.json("Password not match!").status(400)

        //5- Ganerate jwt 
            //Payload
            const payload = {
                user:{
                    id:user.id
                }
            }

             //Secret
             const secret = "ThisIsASecretKey"

             //Sign that return token
            jwt.sign(
                payload, 
                secret,  
                { expiresIn: 36000000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token }).status(200);
                } )

    }
    catch(e)
    {
        console.log(e.message)
        res.json({"message": "You are not logged In !!!"}).status(400);
    }
}