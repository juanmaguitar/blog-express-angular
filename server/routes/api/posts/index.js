const express = require('express')

const router = express.Router()

const getAllPosts = require('./handlers/getAllPosts')
const addPost = require('./handlers/addPost')

router.get('/', getAllPosts)
router.post('/', addPost)

module.exports = router
