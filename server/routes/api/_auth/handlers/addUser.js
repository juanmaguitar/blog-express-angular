const bcrypt = require('bcrypt-nodejs')
const AdminUser = require('../../../../models/AdminUser')

function addUser (req, res) {
  const password = req.body.password
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)

  var adminUser = new AdminUser({
    username: req.body.username,
    password: hash
  })

  adminUser.save()
    .then(() => res.status(200).send('Admin User successfully created'))
    .catch(console.log)
}

module.exports = addUser
