const User = require('../models/User');

exports.signUp = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then((user) => {
      if (user) return res.status(422).send({ error: 'User with this email already exists!' });

      const newUser = new User({ email, password });
      
      newUser.save()
        .then(() => res.json(newUser))
        .catch((e) => next(e));
    })
    .catch((e) => next(e));
};
