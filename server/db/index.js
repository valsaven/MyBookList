/**
 * Created by val on 9/24/16.
 */

'use strict';

import path from 'path';
import config from '../config/env';
import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  config.sequelize.database,
  config.sequelize.username,
  config.sequelize.password,
  config.sequelize.options
);

const db = {
  sequelize,
  Sequelize
};

// Test DB connection
db.sequelize
  .authenticate()
  .then(() => {
    console.log('A connection was successfully established.');
  })
  .catch((err) => {
    console.log('Unable to connect to the database: ', err);
  });

module.exports = db;
