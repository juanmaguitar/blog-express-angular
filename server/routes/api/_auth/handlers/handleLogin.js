const bcrypt = require('bcrypt-nodejs')
const AdminUser = require('../../../../models/AdminUser')

function handleLogin (req, res) {
  const { username, password } = req.body

  AdminUser.findOne({ username: username })
    .then(user => {
      if (user === null) {
        return res.status(401).send('User Doesn\'t exist')
      } else {
        const matchUsername = (username === user.username)
        const matchPassword = bcrypt.compareSync(password, user.password)
        if (matchUsername && matchPassword) {
          req.session.regenerate(() => {
            const { _id: id } = user
            req.session.user = username
            return res.json({ username, id })
          })
        } else {
          return res.status(401).send('Bad Username or Password')
        }
      }
    })
}

module.exports = handleLogin
