const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, '../client')))

app.listen(PORT)
console.log(`Magic happens at PORT ${PORT}...`)
