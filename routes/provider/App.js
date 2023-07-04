const express=require("express")
const router =express.Router()
const providerAppController = require('../../controllers/provider/App')

router.get('Provider/app/viwe',providerAppController.provider_get_viwe)

router.post('Provider/app/delete',providerAppController.provider_delete_app)

module.exports=router