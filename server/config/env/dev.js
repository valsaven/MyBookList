/**
 * Created by val on 9/24/16.
 */

'use strict';

module.exports = {
  sequelize: {
    username: 'librarian',
    database: 'mybooklist',
    password: '123',
    options: {
      host: 'localhost',
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
      logging: console.log,
      define: {
        freezeTableName: true,
        timestamps: false,
        underscored: true
      },
      omitNull: true
    }
  },
  seedDB: false
};
