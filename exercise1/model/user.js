const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'must provide username'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'must provide email'],
  },
  password: {
    type: String,
    required: [true, 'must provide password'],
  },
  firstname: {
    type: String,
    required: [false, 'must provide firstname'],
    default:''
  },
  lastname: {
    type: String,
    required: [false, 'must provide lastname'],
    default:''
  },
  completed: {
    type: Boolean,
    default: false,
  },
  versionKey: false 
})

module.exports = mongoose.model('User', UserSchema)
