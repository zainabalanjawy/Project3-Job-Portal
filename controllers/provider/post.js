const Post = require('../../models/Post')

exports.provider_post_view= async (req,res) => {
    try {
        console.log(req.query.id);
        const posts = await Post.find({ Provider: [req.query.id] })
        console.log(posts)
        res.status(200).json(posts)
    } catch (err) {
        console.log('An error occured:' + err.message)
    }
}

exports.add_provider_post = (req,res) => {
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

exports.delete_provider_post = async(req,res)=> {
        console.log(req.query.id)
        try {
            await Post.findByIdAndDelete(req.query.id)
            res.sendStatus(204)
        } catch (error) {
            console.log(error.message)
            res.status(500).json({message: error.message})
        } finally {
            console.log('We are in the finally block')
        }
    }

    // exports.edit_provider_post_get = async(req,res)=>{
    //     try {
    //         const post = await Post.findById(req.query.id)
    //         res.render('post/edit', {post})
            
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }
   
    exports.edit_provider_post = async(req,res) =>{
        try {
            console.log(req.body.id)
            const post= await Post.findByIdAndUpdate(req.body.id, req.body)
            res.status(204).json(post)
            // res.redirect('/post/edit')

        } catch (error) {
            console.log(error.message)
            
        }
    }