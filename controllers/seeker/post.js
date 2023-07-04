const Post = require('../../models/Post')

exports.seeker_post_view= async (req,res) => {
    try {
        const posts = await Post.find()
        console.log(posts)
        res.status(200).json(posts)
    } catch (err) {
        console.log('An error occured:' + err.message)
    }
}
