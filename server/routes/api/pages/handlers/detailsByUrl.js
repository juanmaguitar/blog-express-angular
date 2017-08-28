const Page = require('../../../../models/Post')

function detailsByUrl (req, res) {
  const { url } = req.params
  Page.findOne({ url })
    .then(page => res.send(200, page))
    .catch(err => res.send(500, err))
}

module.exports = detailsByUrl
