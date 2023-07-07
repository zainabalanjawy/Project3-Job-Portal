const Application = require('../../models/App')
exports.provider_get_viwe = async(req,res)=>{
    try {
        const app = await Application.find({post: [req.query.id]}).populate('user')
        console.log(app)
        res.status(200).json(app)
    } catch (error) {
        console.log(error.message)
        
    }
}
exports.provider_delete_app= async(req,res)=>{
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


