const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express()

const PORT = process.env.PORT || 3001
const clientPath = path.join(__dirname, '../client')
const clientAdminPath = path.join(__dirname, '../client-angular-admin')
const viewsPath = path.join(__dirname, 'views')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/clean-blog',  {useMongoClient: true})
const db = mongoose.connection

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
app.use(session())

app.set('view engine', 'pug')
app.set('views', viewsPath)

app.use(express.static(clientPath))
app.use('/admin', express.static(clientAdminPath))


app.use(require('./routes/views/'))
app.use('/api', require('./routes/api/'));

app.listen(PORT)
console.log(`Magic happens at PORT ${PORT}...`)
