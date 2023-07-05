const express=require("express")
const router =express.Router()
const providerDetailsController = require('../../controllers/provider/Details')

router.get('/Provider/details',providerDetailsController.provider_get_details)
router.post('/Provider/details',providerDetailsController.provider_post_details)


module.exports=router