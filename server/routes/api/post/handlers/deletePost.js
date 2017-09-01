const Post = __require('models/Post')

function deletePost (req, res) {
  const id = req.params.id
  return Post.findByIdAndRemove(id)
    .then(() => res.status(200).send('Post id- ' + id + ' has been deleted'))
    .catch(err => res.status(500).send(err))
}

module.exports = deletePost
