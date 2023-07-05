const Post = require('../../models/Post')
const App = require('../../models/App')

exports.seeker_post_view= async (req,res) => {
    try {
        const posts = await Post.find()
        console.log(posts)
        res.status(200).json(posts)
    } catch (err) {
        console.log('An error occured:' + err.message)
    }
}

exports.seeker_applay_app = (req,res) => {
    const app = new App(req.body)
    app.status= "pending"
   app.save()
        .then (()=> {
            console.log('Your app added sucssefuly')
            res.status(201).json(app)
        })
        .catch((err)=>{
            console.log('error has occured', err)
        })
}