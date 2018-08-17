const passport = require('passport'),
      JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt,
      LocalStrategy = require('passport-local');

const User = require('../models/User');
const keys = require('../settings/keys');

/*******************
** LOCAL STRATEGY **
*******************/
const localOptions = { usernameField: 'email' };

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // verify user name and password, call done if all good
  
});

/*******************
**  JWT STRATEGY  **
*******************/

// create options for JWT strategy
const jwtOptions = {
  // where to look for the token
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  // get the key to decode the payload
  secretOrKey: keys.jwtSecret
};

// create JWT strategy
// the payload is a decoded jwt token
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  // check if the user id from the payload exists
  // in our database.
  User.findById(payload.sub)
    .then((user) => {
      // if so, call done with existing user object.
      if (user) {

        // WARNING: ALWAYS make sure the first argument is either error or null!!!

        done(null, user);
      // otherwise, call done without it
      } else {
        done(null, false);
      }
    })
    // if there's any kinda error, call done with it
    .catch((e) => done(e, false));
});

// tell passport to use this strategy
passport.use(jwtLogin);
