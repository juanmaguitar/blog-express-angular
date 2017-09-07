global.__require = require('./server/helpers/__requireFrom')(`${__dirname}/server`)
global.__base = __dirname

require('dotenv').load()

const app = require('./server/app')
const db = require('./server/config/db')

const DB_URI = process.env.DB_URI
const PORT = process.env.PORT

console.log(`🌀 Connecting to ${DB_URI}`)

db.openUri(DB_URI)
app.listen(PORT, () => console.log(`🔥 Listening on PORT ${PORT}...`))
