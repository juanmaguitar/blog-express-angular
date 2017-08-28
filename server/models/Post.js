const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Page = new Schema({
  title: String,
  subtitle: String,
  url: {
    type: String,
    index: { unique: true }
  },
  author: String,
  content: String,
  menuIndex: Number,
  date: Date,
  createdAt: String
})

module.exports = mongoose.model('Page', Page)
