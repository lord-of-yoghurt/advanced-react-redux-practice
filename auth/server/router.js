const passport = require('passport');

const Auth = require('./controllers/authController');
const passportConfig = require('./services/passport');

const requireAuth = passport.authenticate(
  'jwt',
  // no cookies needed when using JWT
  { session: false }
);

module.exports = (app) => {
  app.get('/', requireAuth, (req, res) => {
    res.send({ message: 'oh hai :D' });
  });

  app.post('/signup', Auth.signUp);
};
