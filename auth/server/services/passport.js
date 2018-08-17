const passport = require('passport'),
      JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/User');
const keys = require('../settings/keys');
