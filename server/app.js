/**
 * Created by val on 9/26/16.
 */

'use strict';

import express from 'express';
import http from 'http';
import config from './config/env';

if (config.seedDB) {
  require('./config/seed');
}

// Setup server
const app = express();
const server = http.createServer(app);
require('./config/express').default(app);
require('./routes').default(app);

// Start server
function startServer() {
  app.myBookList = server.listen(config.port, config.ip, () => {
    console.log('Server listening on port %d, in %s mode',
      config.port, app.get('env'));
  });
}

setImmediate(startServer);

exports = module.exports = app;
