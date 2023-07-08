const express = require('express')
const router = express.Router()
const StatusController = require('../../controllers/provider/status')

// post/edit
router.post('/provider/status/editstatus', StatusController.edit_status)

module.exports = router