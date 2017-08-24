const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3001
const clientPath = path.join(__dirname, '../client')
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
app.locals.marked = marked

app.set('view engine', 'pug')
app.set('views', viewsPath)
app.use(express.static(clientPath))

app.get('/', (req, res) => {
  const section = 'home'
  const styleHeader = `background-image: url('img/home-bg.jpg')`
  const posts = require('./data/posts.json')
  res.render('home.pug', { section, posts, styleHeader })
})

app.get('/about', (req, res) => {
  const section = 'about'
  const styleHeader = `background-image: url('img/about-bg.jpg')`
  const headerTitle = 'About Me'
  const headerSubTitle = 'This is what I do.'
  res.render('about', { section, headerTitle, headerSubTitle, styleHeader })
})

app.get('/contact', (req, res) => {
  const section = 'contact'
  const styleHeader = `background-image: url('img/contact-bg.jpg')`
  const headerTitle = 'Contact Me'
  const headerSubTitle = 'Have questions? I have answers (maybe).'
  res.render('contact', { section, headerTitle, headerSubTitle, styleHeader })
})

app.get('/post', (req, res) => {
  const section = 'post'
  const post = require('./data/posts/4371598efb17446e90a48887a8e9cc45.json')
  const styleHeader = `background-image: url('img/post-bg.jpg')`
  res.render('post', { section, post, styleHeader})
})

app.listen(PORT)
console.log(`Magic happens at PORT ${PORT}...`)
