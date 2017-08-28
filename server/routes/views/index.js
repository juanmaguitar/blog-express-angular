const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const section = 'home'
  const styleHeader = `background-image: url('img/home-bg.jpg')`
  const posts = require('../../data/posts.json')
  res.render('home.pug', { section, posts, styleHeader })
})

router.get('/about', (req, res) => {
  const section = 'about'
  const styleHeader = `background-image: url('img/about-bg.jpg')`
  const headerTitle = 'About Me'
  const headerSubTitle = 'This is what I do.'
  res.render('about', { section, headerTitle, headerSubTitle, styleHeader })
})

router.get('/contact', (req, res) => {
  const section = 'contact'
  const styleHeader = `background-image: url('img/contact-bg.jpg')`
  const headerTitle = 'Contact Me'
  const headerSubTitle = 'Have questions? I have answers (maybe).'
  res.render('contact', { section, headerTitle, headerSubTitle, styleHeader })
})

router.get('/post', (req, res) => {
  const section = 'post'
  const post = require('../../data/posts/4371598efb17446e90a48887a8e9cc45.json')
  const styleHeader = `background-image: url('img/post-bg.jpg')`
  res.render('post', { section, post, styleHeader })
})

module.exports = router
