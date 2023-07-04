const express=require("express")
const router =express.Router()
const seekerAppController = require('../../models/App')

router.get ('seeker/app/viwe',seekerAppController.seeker_get_viwe)

router.post ('seeker/app/delete',seekerAppController.seeker_delete_app)

module.exports=router