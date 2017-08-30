function showContact (req, res) {
  const section = 'contact'
  const styleHeader = `background-image: url('/img/contact-bg.jpg')`
  const headerTitle = 'Contact Me'
  const headerSubTitle = 'Have questions? I have answers (maybe).'
  res.render('contact', { section, headerTitle, headerSubTitle, styleHeader })
}

module.exports = showContact
