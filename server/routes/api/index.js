const express = require('express')

const router = express.Router()

const routesPosts = require('./posts/')
const routesPost = require('./post/')

router.use('/posts', routesPosts)
router.use('/post', routesPost)

module.exports = router
