const Page = require('../../../../models/Post')

function getAllPages (req, res) {
  Page.find()
    .then(pages => res.status(200).json(pages))
    .catch(err => res.status(500).send(err))
}

module.exports = getAllPages
