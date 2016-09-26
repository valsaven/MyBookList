/**
 * Created by val on 9/24/16.
 */

'use strict';

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

if (env === 'dev') {
  require('babel-register');
}

exports = module.exports = require('./app');
