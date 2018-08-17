const jwt = require('jwt-simple');
const keys = require('../settings/keys');

const User = require('../models/User');

const getUserToken = (user) => {
  const timestamp = new Date().getTime();
  // this is the payload to use for passport's
  // JWT strategy
  return jwt.encode({
    // the subject
    sub: user.id,
    // issued at
    iat: timestamp
  }, keys.jwtSecret);
};

exports.signUp = (req, res, next) => {
  const email = req.body.email,
        password = req.body.password;

  // TODO: add functionality to validate email addresses

  if (!email || !password) {
    return res.status(422).send({ error: 'Email and password are required!' });
  }

  User.findOne({ email })
    .then((user) => {
      if (user) return res.status(422).send({ error: 'User with this email already exists!' });

      const newUser = new User({ email, password });

      newUser.save()
        .then(() => res.json(
          { token: getUserToken(newUser) }
        ))
        .catch((e) => next(e));
    })
    .catch((e) => next(e));
};
