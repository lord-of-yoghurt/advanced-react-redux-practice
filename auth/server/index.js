/*
 * Package imports
 */
const express = require('express'),
      http = require('http'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      mongoose = require('mongoose'),
      app = express();

/*
 * App setup
 */
// parse as json, no matter what type it is
app.use(bodyParser.json({ type: '*/*' }));
app.use(morgan('combined'));

/*
 * DB/ORM Setup
 */
const keys = require('./settings/keys');
// use if offline
// mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true });
mongoose.connect(`${keys.dbLink}`, { useNewUrlParser: true });
mongoose.Promise = Promise;

/*
 * Route imports
 */
require('./router')(app);

/*
 * Model imports
 */
const UserModel = require('./models/User');

/*
 * Server setup
 */
const port = process.env.PORT || 3000,
      server = http.createServer(app);

server.listen(port);

console.log(`Make it good! Port ${port} is ready for you.`);
