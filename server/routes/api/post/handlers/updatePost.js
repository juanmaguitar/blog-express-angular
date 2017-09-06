const Post = __require('models/Post')

function updatePost (req, res) {
  const { id } = req.params
  const { title, url, content } = req.body
  Post.findByIdAndUpdate(id, { title, url, content })
    .then(() => res.status(200).send('Post updated'))
    .catch(err => res.status(500).send(err))
}

module.exports = updatePost
