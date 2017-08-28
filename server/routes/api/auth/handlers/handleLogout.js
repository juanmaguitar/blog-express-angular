function handleLogout (req, res) {
  req.session.destroy(() => res.send(401, 'User logged out'))
}

module.exports = handleLogout
