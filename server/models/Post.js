const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema

const Page = new Schema({
  title: String,
  subtitle: String,
  url: {
    type: String,
    index: { unique: true }
  },
  author: {
    type: ObjectId,
    ref: 'adminUser'
  },
  content: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
})

module.exports = mongoose.model('Page', Page)
