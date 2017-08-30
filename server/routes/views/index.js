const express = require('express')
const router = express.Router()

const Page = require('../../models/Post')

router.get('/', (req, res) => {
  const section = 'home'
  const styleHeader = `background-image: url('img/home-bg.jpg')`
  Page.find()
    .populate('author')
    .then(posts => {
      console.log(posts[0])
      res.render('home.pug', { section, posts, styleHeader })
    })
    .catch(err => res.status(500).send(err))
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

router.get('/post/:url', (req, res) => {
  const { url } = req.params
  const section = 'post'
  const styleHeader = `background-image: url('img/post-bg.jpg')`
  Page.findOne({ url })
    .populate('author')
    .then(post => {
      res.render('post', { section, post, styleHeader })
    })
    .catch(err => res.status(500).send(err))

})

module.exports = router
