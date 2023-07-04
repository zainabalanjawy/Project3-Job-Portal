const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

// Call our API
router.get('/signin', authController.signin_get)
router.post('/signin',authController.signin_post)

module.exports = router