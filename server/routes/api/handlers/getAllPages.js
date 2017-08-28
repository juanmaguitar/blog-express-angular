const Page = require('../../../models/Post')

function getAllPages (req, res) {
  Page.find()
    .then(pages => res.json(pages))
    .catch(err => res.send(500, err))
}

module.exports = getAllPages
