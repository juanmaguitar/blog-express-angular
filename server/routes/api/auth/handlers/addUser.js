const bcrypt = require('bcrypt-nodejs')
const AdminUser = require('../../../../models/AdminUser')

function addUser (request, response) {
  const password = request.body.password
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)

  var adminUser = new AdminUser({
    username: request.body.username,
    password: hash
  })

  adminUser.save()
    .then(() => response.send('Admin User successfully created'))
    .catch(console.log)
}

module.exports = addUser
