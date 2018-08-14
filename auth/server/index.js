/*
 * Imports
 */

const express = require('express'),
      http = require('http'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      app = express();

/*
 * App setup
 */

/*
 * Server setup
 */
const port = process.env.PORT || 3000,
      server = http.createServer(app);

server.listen(port);

console.log(`Make it good! Port ${port} is ready for you.`);
