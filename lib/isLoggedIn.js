
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    //1- Take the header from the token
    var token = ""
    var authToken = req.header("Authorization")
    console.log(authToken)
    //2- If there is an auth token
    if(authToken)
    {
        // 3- Will replace the Bearer with only the token 
        authToken = authToken.replace("Bearer ","")
        console.log(authToken)
        // 4- Will take only the token puerly
        token= authToken
    }
    //5- If there is not an auth token
    if(!authToken)
    {
        return res.json({"message": "Ahhhhan! this is not allowed!"})
    }

    try
    {
        //6- It will verfiy that the secret is same
        const decoded = jwt.verify(token, "ThisIsASecretKey")
        //7- It will check that the user is decoded to be used in other pages
        req.user = decoded.user
        console.log(decoded.user)
        next()
    }
    catch(e)
    {
        console.log(e.message);
        res.status(401).json({"message": "Your token is not valid!"})
    }
}
