const Auth = require('./controllers/authController');

module.exports = (app) => {
  app.post('/signup', Auth.signUp);
};
