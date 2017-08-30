const Page = require('../../../../models/Post')

function detailsByUrl (req, res) {
  const { url } = req.params
  Page.findOne({ url })
    .then(page => res.status(200).send(page))
    .catch(err => res.status(500).send(err))
}

module.exports = detailsByUrl
