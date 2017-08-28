const bcrypt = require('bcrypt-nodejs')
const AdminUser = require('../../../../models/AdminUser')

function handleLogin (req, res) {
  const { username, password } = req.body

  AdminUser.findOne({ username: username })
    .then(user => {
      if (user === null) {
        return res.send(401, 'User Doesn\'t exist')
      } else {
        const matchUsername = (username === user.username)
        const matchPassword = bcrypt.compareSync(password, user.password)
        if (matchUsername && matchPassword) {
          req.session.regenerate(() => {
            req.session.user = username
            return res.send(username)
          })
        } else {
          return res.send(401, 'Bad Username or Password')
        }
      }
    })
}

module.exports = handleLogin
