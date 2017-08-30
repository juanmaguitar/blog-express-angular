const Page = require('../../../../models/Post')

function addPage (req, res) {
  const { title, url, content, menuIndex } = req.body
  const newPage = new Page({ title, url, content, menuIndex })

  newPage.save()
    .then(page => res.status(200).send(page))
    .catch(err => res.status(500).send(err))
}

module.exports = addPage
