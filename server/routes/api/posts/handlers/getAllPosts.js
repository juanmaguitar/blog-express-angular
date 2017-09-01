const Post = __require('models/Post')

function getAllPosts (req, res) {
  Post.find()
    .populate('author')
    .then(posts => res.status(200).json(posts))
    .catch(err => res.status(500).send(err))
}

module.exports = getAllPosts
