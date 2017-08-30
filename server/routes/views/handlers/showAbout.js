function showAbout (req, res) {
  const section = 'about'
  const styleHeader = `background-image: url('/img/about-bg.jpg')`
  const headerTitle = 'About Me'
  const headerSubTitle = 'This is what I do.'
  res.render('about', { section, headerTitle, headerSubTitle, styleHeader })
}

module.exports = showAbout
