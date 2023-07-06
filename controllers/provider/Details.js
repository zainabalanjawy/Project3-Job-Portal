const Post = require('../../models/Details')


exports.provider_post_details = (req,res) => {
    const post = new Post(req.body)
    post.save()
        .then (()=> {
            console.log('Your post added sucssefuly')
            res.status(201).json(post)
        })
        .catch((err)=>{
            console.log('error has occured', err)
        })
}
exports.provider_get_details = (req,res) => {
    Post.find()
    .then((posts) => {
        res.status(200).json(posts)
        })
        .catch((err) => {
            console.log('error has occured', err)
            })
            }