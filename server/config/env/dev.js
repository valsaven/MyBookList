/**
 * Created by val on 9/24/16.
 */

'use strict';

module.exports = {
  sequelize: {
    options: {
      host: 'localhost',
      dialect: 'sqlite',
      storage: './db.sqlite',
      logging: false,
      define: {
        freezeTableName: true,
        timestamps: false,
        underscored: true
      },
      omitNull: true
    }
  },
  seedDB: true
};
