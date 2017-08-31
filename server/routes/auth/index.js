const express = require('express')
const path = require('path')
const router = express.Router()

const passport = require(path.join(__base, 'config/passport'))
const registerUser = require('./handlers/registerUser')
const loginUser = require('./handlers/loginUser')

router.post('/register', registerUser)
router.post('/login', passport.authenticate('local', { session: false }), loginUser)

module.exports = router
