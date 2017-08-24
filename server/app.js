const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3001

app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, '../client')))

app.get('/', (req, res) => {
  const posts = require('./data/posts.json')
  res.render('home', { posts })
})

app.listen(PORT)
console.log(`Magic happens at PORT ${PORT}...`)
