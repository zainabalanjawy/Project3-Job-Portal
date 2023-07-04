const express = require('express')
const router = express.Router()
const providerauthController = require('../../controllers/provider/auth')


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
router.get('/provider/signup', providerauthController.signup_get)
router.post('/provider/signup', /*upload.single('profile_image'),*/providerauthController.signup_post)

module.exports = router