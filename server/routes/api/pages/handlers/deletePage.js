const Page = require('../../../../models/Post')

function deletePage (req, res) {
  const id = req.params.id
  return Page.findByIdAndRemove(id)
    .then(() => res.status(200).send('Page id- ' + id + ' has been deleted'))
    .catch(err => res.status(500).send(err))
}

module.exports = deletePage
