const express = require('express')
const router = express.Router()

const showHome = require('./handlers/showHome')
const showAbout = require('./handlers/showAbout')
const showContact = require('./handlers/showContact')
const showPost = require('./handlers/showPost')

router.get('/', showHome)
router.get('/about', showAbout)
router.get('/contact', showContact)
router.get('/post/:url', showPost)

module.exports = router
