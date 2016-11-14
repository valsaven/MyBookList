/**
 * Created by val on 9/24/16.
 */

'use strict';

import path from 'path';
import _ from 'lodash';

const all = {
  env: process.env.NODE_ENV || 'dev',

  // Root path of the server
  root: path.normalize(`${__dirname}/../../..`),

  // Browser-sync port
  browserSyncPort: process.env.BROWSER_SYNC_PORT || 3000,

  // Server port
  port: process.env.PORT || 9000,

  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // Fill DB with sample data
  seedDB: true,
};

module.exports = _.merge(
  all,
  require(`./${process.env.NODE_ENV}.js`) || {});
