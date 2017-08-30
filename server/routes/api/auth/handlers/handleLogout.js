function handleLogout (req, res) {
  req.session.destroy(() => res.status(200).send('User logged out'))
}

module.exports = handleLogout
