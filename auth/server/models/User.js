const mongoose = require('mongoose'),
      { Schema } = mongoose;

const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String
});

// encrypt password using a hook that executes
// right before a record is saved. use the `function`
// keyword here because of `this` binding
userSchema.pre('save', function(next) {
  // get access to the user model explicitly
  const user = this;

  // generate a salt, run a callback
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    // encrypt the password using the salt
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);

      // rewrite the password with the newly made hash
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('users', userSchema);
