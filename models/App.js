const mongoose=require("mongoose")
const AppSchema=mongoose.Schema({

   status :String,
   user: [
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
   ],
   
   post:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Post'
   }]

})
const App=mongoose.model('App',AppSchema)
module.exports = App