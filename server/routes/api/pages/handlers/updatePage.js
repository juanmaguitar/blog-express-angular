const Page = require('../../../../models/Post')

function updatePage (req, res) {
  const { _id: id, title, url, content, menuIndex } = req.body
  Page.findByIdAndUpdate(id, { title, url, content, menuIndex })
    .then(() => res.send(200, 'Page updated'))
    .catch(err => res.send(500, err))
}

module.exports = updatePage
