const Page = require('../../../models/Post')

function showHome (req, res) {
  const section = 'home'
  const styleHeader = `background-image: url('/img/home-bg.jpg')`
  Page.find()
    .populate('author')
    .then(posts => {
      console.log(posts[0])
      res.render('home.pug', { section, posts, styleHeader })
    })
    .catch(err => res.status(500).send(err))
}

module.exports = showHome
