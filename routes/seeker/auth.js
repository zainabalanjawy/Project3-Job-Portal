const express = require('express')
const router = express.Router()
const seekerauthController = require('../../controllers/seeker/auth')


// const multer = require('multer');
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './public/uploads/')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
//     }
//   })
//   let upload = multer({ storage: storage })



// Call our API
router.get('/seeker/signup', seekerauthController.signup_get)
router.post('/seeker/signup',seekerauthController.signup_post)

module.exports = router