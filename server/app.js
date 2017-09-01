const express = require('express')
const path = require('path')

const app = express()

app.locals.pretty = true

/* marked */
const marked = require('./config/marked')
app.locals.marked = marked

/* moment */
const moment = require('moment')
app.locals.moment = moment

/* bodyParser */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* passport */
const passport = require('./config/passport')
app.use(passport.initialize())

app.set('view engine', 'pug')

const viewsPath = path.join(__dirname, 'views')
app.set('views', viewsPath)

/* public paths  */
const bowerComponentsPath = path.join(__dirname, '../public/bower_components')
const assetsPath = path.join(__dirname, '../public/assets')
const adminPath = path.join(__dirname, '../public/admin')

app.use(express.static(bowerComponentsPath))
app.use(express.static(assetsPath))
app.use('/admin/', express.static(adminPath))

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/admin/index.html'))
})

/* routers  */
const authRoutes = require('./routes/auth/')
const viewsRoutes = require('./routes/views/')
const apiPagesRoutes = require('./routes/api/')

app.use(viewsRoutes)
app.use('/admin', authRoutes)
app.use('/api', passport.authenticate('jwt', { session: false }), apiPagesRoutes)

module.exports = app
