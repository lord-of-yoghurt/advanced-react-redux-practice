const mongoose = require('mongoose'),
      { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String
});

module.exports = mongoose.model('users', userSchema);
