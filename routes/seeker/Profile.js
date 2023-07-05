const express=require("express")
const router =express.Router()
const seekerProfileController = require('../../controllers/seeker/Profile')

router.get('/seeker/profile',seekerProfileController.seeker_get_profile)

router.post('/seeker/profile',seekerProfileController.seeker_post_profile)



module.exports=router