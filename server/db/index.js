/**
 * Created by val on 9/24/16.
 */

'use strict';

import Sequelize from 'sequelize';
import config from '../config/env';

const sequelize = new Sequelize(
  null, // database
  null, // username
  null, // password
  config.sequelize.options,
);

const db = {
  sequelize,
  Sequelize,
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

// Models
db.Author = db.sequelize.import('../api/author/author.model');
db.Book = db.sequelize.import('../api/book/book.model');
db.BookHasAuthor = db.sequelize.import('../api/book_has_author/book_has_author.model');
db.BookHasGenre = db.sequelize.import('../api/book_has_genre/book_has_genre.model');
db.Genre = db.sequelize.import('../api/genre/genre.model');
db.Status = db.sequelize.import('../api/status/status.model');

module.exports = db;
