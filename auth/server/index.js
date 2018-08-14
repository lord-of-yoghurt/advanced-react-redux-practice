/*
 * Package imports
 */
const express = require('express'),
      http = require('http'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      app = express();

/*
 * File imports
 */
require('./router')(app);

/*
 * App setup
 */
app.use(morgan('combined'));
// parse as json, no matter what type it is
app.use(bodyParser.json({ type: '*/*' }));

/*
 * Server setup
 */
const port = process.env.PORT || 3000,
      server = http.createServer(app);

server.listen(port);

console.log(`Make it good! Port ${port} is ready for you.`);
