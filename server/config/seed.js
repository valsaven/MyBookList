/**
 * Created by val on 9/26/16.
 */

'use strict';

import db from '../db';

const Book = db.Book;
const Genre = db.Genre;
const Status = db.Status;
const Author = db.Author;
const BookHasAuthor = db.BookHasAuthor;

Status.sync()
  .then(() => Status.destroy({ where: {} }))
  .then(() => {
    Status.bulkCreate([
      { name: 'Currently Reading' },
      { name: 'Completed' },
      { name: 'On Hold' },
      { name: 'Dropped' },
      { name: 'Plan to Read' }]);
  });

Author.sync()
  .then(() => Author.destroy({ where: {} }))
  .then(() => {
    Author.bulkCreate([
      {
        firstName: 'George',
        lastName: 'Orwell',
        born: '1903-06-25',
        died: '1950-01-21',
        description: 'https://en.wikipedia.org/wiki/George_Orwell'
      },
      {
        firstName: 'Joanne',
        lastName: 'Rowling',
        born: '1965-07-31',
        description: 'https://en.wikipedia.org/wiki/J._K._Rowling'
      },
      {
        firstName: 'Robert',
        lastName: 'Salvatore',
        born: '1959-01-20',
        description: 'https://en.wikipedia.org/wiki/R._A._Salvatore'
      },
      {
        firstName: 'Herbert',
        lastName: 'Wells',
        born: '1866-09-21',
        died: '1946-08-13',
        description: 'https://en.wikipedia.org/wiki/H._G._Wells'
      },
      {
        firstName: 'Lewis',
        lastName: 'Carroll',
        born: '1832-01-27',
        died: '1898-01-14',
        description: 'https://en.wikipedia.org/wiki/Lewis_Carroll'
      }
    ]);
  });

Book.sync()
  .then(() => Book.destroy({ where: {} }))
  .then(() => {
    Book.bulkCreate([
      {
        title: '1984',
        status: 2,
        description: 'Written in 1948, 1984 was George Orwell’s chilling ' +
        'prophecy about the future. And while 1984 has come and gone, ' +
        'Orwell’s narrative is timelier than ever. 1984 presents a startling ' +
        'and haunting vision of the world, so powerful that it is completely ' +
        'convincing from start to finish. No one can deny the power of this ' +
        'novel, its hold on the imaginations of multiple generations of ' +
        'readers, or the resiliency of its admonitions — a legacy that ' +
        'seems only to grow with the passage of time.',
        created: '2016-05-30',
        currentPage: 304,
        totalPages: 304
      },
      {
        title: 'Alice\'s Adventures in Wonderland',
        status: 1,
        description: 'Alice is sitting with her sister outdoors when she ' +
        'spies a White Rabbit with a pocket watch.Fascinated by the sight, ' +
        'she follows the rabbit down the hole. She falls for a long time, ' +
        'and finds herself in a long hallway full of doors.',
        created: '2016-01-07',
        currentPage: 25,
        totalPages: 66
      },
    ]);
  });

BookHasAuthor.sync()
  .then(() => BookHasAuthor.destroy({ where: {} }))
  .then(() => {
    BookHasAuthor.bulkCreate([
      {
        book_id: 1,
        author_id: 1
      },
      {
        book_id: 2,
        author_id: 5
      }
    ]);
  });

Genre.sync()
  .then(() => Genre.destroy({ where: {} }))
  .then(() => {
    Genre.bulkCreate([
      { name: 'Comedy' }, { name: 'Drama' }, { name: 'Fantasy' },
      { name: 'Fiction' }, { name: 'Horror' }, { name: 'Non-fiction' },
      { name: 'Realistic fiction' }, { name: 'Romance novel' },
      { name: 'Satire' }, { name: 'Tragedy' }, { name: 'Tragicomedy' }
    ]);
  });
