const express=require("express")
const router =express.Router()
const providerAppController = require('../../controllers/provider/App')

router.get('/provider/app/view',providerAppController.provider_get_viwe)
router.post('/provider/app/delete',providerAppController.provider_delete_app)
// router.post('Provider/app/delete',providerAppController.provider_delete_app)
// router.post('/Provider/app/delete',providerAppController.privider_delete_app)
module.exports=router