const express = require('express')
const router = express.Router()
const ProviderPostController = require('../../controllers/provider/post')

// post/add 
// router.get('/post/add', ProviderPostController.add_provider_get_post)
router.post('/provider/post/add', ProviderPostController.add_provider_post)

// post/edit
router.post('/provider/post/edit', ProviderPostController.edit_provider_post)
// router.get ('/post/edit', ProviderPostController.edit_provider_post_get)

// post/delete
router.post('/provider/post/delete', ProviderPostController.delete_provider_post)

// post/home
router.get('/provider/home', ProviderPostController.provider_post_view)


module.exports = router