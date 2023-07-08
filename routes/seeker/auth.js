const express = require('express')
const router = express.Router()
const seekerauthController = require('../../controllers/seeker/auth')


// const multer  = require('multer')
// //let upload = multer({ dest: 'uploads/' })

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '/uploads')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, file.fieldname + '-' + uniqueSuffix)
//   }
// })

// upload = multer({ storage: storage })

// Call our API
router.get('/seeker/signup', seekerauthController.signup_get)
router.post('/seeker/signup',/*upload.single('profileImg'),*/seekerauthController.signup_post)

module.exports = router