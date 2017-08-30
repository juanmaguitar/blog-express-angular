const Page = require('../../../models/Post')

function showPost (req, res) {
  const { url } = req.params
  const section = 'post'
  const styleHeader = `background-image: url('/img/contact-bg.jpg')`
  const headerTitle = 'Contact Me'
  const headerSubTitle = 'Have questions? I have answers (maybe).'
  Page.findOne({ url })
    .populate('author')
    .then(post => {
      res.render('post', { section, post, headerTitle, headerSubTitle, styleHeader })
    })
    .catch(err => res.status(500).send(err))
}

module.exports = showPost
