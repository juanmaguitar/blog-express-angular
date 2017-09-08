const express = require('express')
const router = express.Router()

const sendMail = require('./handlers/sendMail')

router.post('/contact', sendMail)

module.exports = router
