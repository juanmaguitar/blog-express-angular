const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema

const Post = new Schema({
  title: String,
  subtitle: String,
  url: {
    type: String,
    index: { unique: true }
  },
  author: {
    type: ObjectId,
    ref: 'User'
  },
  content: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
})

module.exports = mongoose.model('Post', Post)
