const express = require('express')

const router = express.Router()

const updatePost = require('./handlers/updatePost')
const deletePost = require('./handlers/deletePost')
const detailsById = require('./handlers/detailsById')

router.get('/:id', detailsById)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)

module.exports = router
