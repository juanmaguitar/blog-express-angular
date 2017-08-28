const Page = require('../../../../models/Post')

function deletePage (req, res) {
  const id = req.params.id
  return Page.findByIdAndRemove(id)
    .then(() => res.send('Page id- ' + id + ' has been deleted'))
    .catch(err => res.send(500, err))
}

module.exports = deletePage
