const Post = __require('models/Post')

function detailsById (req, res) {
  const { id } = req.params
  Post.findById(id)
    .then(post => res.status(200).send(post))
    .catch(err => res.status(500).send(err))
}

module.exports = detailsById
