const Page = require('../../../../models/Post')

function detailsById(req, res) {
  const { id } = req.params
  Page.findOne({ _id: id })
    .then(page => res.send(200, page))
    .catch(err => res.send(500, err))
}

module.exports = detailsById
