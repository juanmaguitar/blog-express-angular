function handleLogout (req, res) {
  req.session.destroy(() => res.send(200, 'User logged out'))
}

module.exports = handleLogout
