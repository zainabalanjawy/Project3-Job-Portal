const Application = require('../../models/App')
const Post = require('../../models/Post')
exports.seeker_get_viwe = async(req,res)=>{
    try {
        const app = await Application.find(
           { user:[req.query.id]}

        ).populate('post')
        const post = await Post.findOne(
            { _id:[app.post]}
 
         )
        console.log(app)
        res.status(200).json(app)
    } catch (error) {
        console.log(error.message)
        
    }
}



exports.seeker_delete_app= async(req,res)=>{
    console.log(req.query.id)
    try {
      await Application.findByIdAndDelete(req.query.id)
        res.sendStatus(204)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    } finally {
        console.log('We are in the finally block')
    }
}


