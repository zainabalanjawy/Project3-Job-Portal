const express = require('express')
const router = express.Router()
const SeekerpostController = require('../../controllers/seeker/post')

// post/view
router.get('/seeker/post/view',SeekerpostController.seeker_post_view)
router.post('/seeker/post/detailes',SeekerpostController.seeker_applay_app)

module.exports = router