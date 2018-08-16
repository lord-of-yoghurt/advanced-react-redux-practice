const User = require('../models/User');

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
          { message: `User successfully created: ${newUser.email}, ${newUser.password}` }
        ))
        .catch((e) => next(e));
    })
    .catch((e) => next(e));
};
