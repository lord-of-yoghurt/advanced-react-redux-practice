const passport = require('passport');

const Auth = require('./controllers/authController');
const passportConfig = require('./services/passport');

// for JWT auth to access auth-required routes
const requireAuth = passport.authenticate(
  'jwt',
  // no cookies needed when using JWT
  { session: false }
);

// for local auth (email/password)
const requireSignIn = passport.authenticate(
  'local',
  { session: false }
);

module.exports = (app) => {
  app.get('/', requireAuth, (req, res) => {
    res.send({ message: 'oh hai :D' });
  });

  app.post('/signin', requireSignIn, Auth.signIn);

  app.post('/signup', Auth.signUp);
};
