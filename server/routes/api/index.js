const express = require('express')
const bcrypt = require('bcrypt-nodejs')
const Page = require('../../models/Post')
const AdminUser = require('../../models/AdminUser')

const router = express.Router()

const getAllPages = require('./handlers/getAllPages')
const addPage = require('./handlers/addPage')
const updatePage = require('./handlers/updatePage')

router.get('/', function (req, res) {
  res.send('Welcome to the API zone')
})

router.get('/pages', getAllPages)

router.post('/pages/add', sessionCheck, addPage)
router.post('/pages/update', sessionCheck, updatePage)

router.get('/pages/delete/:id', sessionCheck, function (request, response) {
  const id = request.params.id
  return Page.findByIdAndRemove(id)
    .then(() => response.send('Page id- ' + id + ' has been deleted'))
    .catch(console.log)
})

router.get('/pages/admin-details/:id', sessionCheck, function (request, response) {
  const id = request.params.id
  Page.findOne({ _id: id })
    .then(page => response.send(200, page))
    .catch(err => response.send(500, err))
})

router.get('/pages/details/:url', function (request, response) {
  const url = request.params.url
  Page.findOne({ url: url })
    .then(page => response.send(200, page))
    .catch(err => response.send(500, err))
})

router.post('/add-user', function (request, response) {
  const password = request.body.password
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)

  var adminUser = new AdminUser({
    username: request.body.username,
    password: hash
  })

  adminUser.save()
    .then(() => response.send('Admin User successfully created'))
    .catch(console.log)
})

router.post('/login', function (request, response) {
  var username = request.body.username
  var password = request.body.password

  AdminUser.findOne({ username: username })
    .then(data => {
      if (data === null) {
        return response.send(401, 'User Doesn\'t exist')
      } else {
        const usr = data
        if (username === usr.username && bcrypt.compareSync(password, usr.password)) {
          request.session.regenerate(function () {
            request.session.user = username
            return response.send(username)
          })
        } else {
          return response.send(401, 'Bad Username or Password')
        }
      }
    })
})

router.get('/logout', function (request, response) {
  request.session.destroy(function () {
    return response.send(401, 'User logged out')
  })
})

function sessionCheck (request, response, next) {
  if (request.session.user) next()
  else response.send(401, 'authorization failed')
}

module.exports = router
