/**
 * Created by val on 9/24/16.
 */

'use strict';

module.exports = {
  sequelize: {
    options: {
      dialect: 'sqlite',
      storage: './db.sqlite',
      logging: true,
      define: {
        freezeTableName: true,
        timestamps: false,
        underscored: true,
      },
      omitNull: true,
    },
  },
};
