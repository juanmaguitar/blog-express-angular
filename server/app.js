const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express()

const PORT = process.env.PORT || 3001

const bowerComponentsPath = path.join(__dirname, '../public/bower_components')
const assetsPath = path.join(__dirname, '../public/assets')
const adminPath = path.join(__dirname, '../public/admin')

const viewsPath = path.join(__dirname, 'views')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/clean-blog', { useMongoClient: true })
//const db = mongoose.connection

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
app.locals.marked = marked

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({
  secret: 'N2I0ZTRjYTUxODMxN2RiODEzMmFmNmRlYzIzMjQyZWI',
  resave: true,
  saveUninitialized: true
}))

app.set('view engine', 'pug')
app.set('views', viewsPath)

app.use(express.static(bowerComponentsPath))
app.use(express.static(assetsPath))
app.use('/admin/', express.static(adminPath))

app.use(require('./routes/pages/'))
app.use('/api', require('./routes/api/pages/'))
app.use('/api', require('./routes/api/auth/'))

// app.get('/admin/*', function (request, response) {
//   response.sendfile('../public/admin/index.html')
// })

app.listen(PORT)
console.log(`Magic happens at PORT ${PORT}...`)
