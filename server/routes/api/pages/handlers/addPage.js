const Page = require('../../../../models/Post')

function addPage (req, res) {
  const { title, url, content, menuIndex } = req.body
  const newPage = new Page({ title, url, content, menuIndex })

  newPage.save()
    .then(page => res.send(200, page))
    .catch(err => res.send(500, err))
}

module.exports = addPage
