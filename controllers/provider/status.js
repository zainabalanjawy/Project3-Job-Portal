const App = require('../../models/App')


exports.edit_status = async(req,res) =>{
    try {
        console.log(req.body)
        console.log(req.query)
        console.log(req.params)
        const app= await App.findByIdAndUpdate(req.body.id, req.body)
        res.status(204).json(app)
        // res.redirect('/post/edit')

    } catch (error) {
        console.log(error.message)
        
    }
}