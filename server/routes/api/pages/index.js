const express = require('express')

const router = express.Router()

const getAllPages = require('./handlers/getAllPages')
const addPage = require('./handlers/addPage')
const updatePage = require('./handlers/updatePage')
const deletePage = require('./handlers/deletePage')
const detailsById = require('./handlers/detailsById')
const detailsByUrl = require('./handlers/detailsByUrl')

router.get('/', function (req, res) {
  res.send('Welcome to the API zone')
})

router.get('/pages', getAllPages)
router.get('/pages/details/:url', detailsByUrl)

router.post('/pages/add', sessionCheck, addPage)
router.post('/pages/update', sessionCheck, updatePage)
router.delete('/pages/delete/:id', sessionCheck, deletePage)
router.get('/pages/admin-details/:id', sessionCheck, detailsById)

function sessionCheck (req, res, next) {
  if (req.cookies.loggedInUser) next()
  else res.send(401, 'authorization failed')
}

module.exports = router
