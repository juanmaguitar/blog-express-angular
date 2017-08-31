const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const moment = require('moment')

const passport = require('./config/passport')

const AuthRoutes = require('./routes/auth/')
const privateRoutes = require('./routes/private')
const viewsRoutes = require('./routes/views/')
const apiPagesRoutes = require('./routes/api/pages/')

const bowerComponentsPath = path.join(__dirname, '../public/bower_components')
const assetsPath = path.join(__dirname, '../public/assets')
const adminPath = path.join(__dirname, '../public/admin')

const viewsPath = path.join(__dirname, 'views')

const marked = require('marked')
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
})

const app = express()

app.locals.pretty = true
app.locals.marked = marked
app.locals.moment = moment

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(passport.initialize())

app.set('view engine', 'pug')
app.set('views', viewsPath)

app.use(express.static(bowerComponentsPath))
app.use(express.static(assetsPath))
app.use('/admin/', express.static(adminPath))

app.use(viewsRoutes)
app.use('/private', privateRoutes)
app.use('/api', apiPagesRoutes)
app.use('/api', apiAuthRoutes)

// app.get('/admin/*', function (request, response) {
//   response.sendfile('../public/admin/index.html')
// })

module.exports = app
