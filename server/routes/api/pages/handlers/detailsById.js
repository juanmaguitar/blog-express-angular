const Page = require('../../../../models/Post')

function detailsById(req, res) {
  const { id } = req.params
  Page.findOne({ _id: id })
    .then(page => res.status(200).send(page))
    .catch(err => res.status(500).send(err))
}

module.exports = detailsById
