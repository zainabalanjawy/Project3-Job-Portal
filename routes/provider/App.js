const express=require("express")
const router =express.Router()
const providerAppController = require('../../models/App')

router.get ('Provider /app/viwe',prividerAppController.provider_get_viwe)

router.post ('Provider /app/delete',providerAppController.provider_delete_app)

module.exports=router