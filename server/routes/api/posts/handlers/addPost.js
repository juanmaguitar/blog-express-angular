const Post = __require('models/Post')

function addPost (req, res) {
  const { title, url, content, author } = req.body
  const newPost = new Post({ title, url, content, author })

  newPost.save()
    .then(post => res.status(200).send(post))
    .catch(err => res.status(500).send(err))
}

module.exports = addPost
