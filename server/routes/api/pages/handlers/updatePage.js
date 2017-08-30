const Page = require('../../../../models/Post')

function updatePage (req, res) {
  const { _id: id, title, url, content, menuIndex } = req.body
  Page.findByIdAndUpdate(id, { title, url, content, menuIndex })
    .then(() => res.status(200).send('Page updated'))
    .catch(err => res.status(500).send(err))
}

module.exports = updatePage
