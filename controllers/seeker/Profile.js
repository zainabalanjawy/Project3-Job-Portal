const Post = require('../../models/Profile')


exports.seeker_post_profile = (req,res) => {
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
        exports.seeker_get_profile = async(req,res) => {
            try{
             const posts=await Post.find({user: [req.query.id]})
                res.status(200).json(posts)
            }catch(err){
                    console.log('error has occured', err)
                  }
                }
                
