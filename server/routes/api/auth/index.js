const express = require('express')

const router = express.Router()

const addUser = require('./handlers/addUser')
const handleLogin = require('./handlers/handleLogin')
const handleLogout = require('./handlers/handleLogout')

router.post('/add-user', addUser)
router.post('/login', handleLogin)
router.get('/logout', handleLogout)

module.exports = router
