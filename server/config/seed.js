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

Status.sync({ force: true })
  .then(() => Status.destroy({ where: {} }))
  .then(() => {
    Status.bulkCreate([
      { name: 'Currently Reading' },
      { name: 'Completed' },
      { name: 'On Hold' },
      { name: 'Dropped' },
      { name: 'Plan to Read' }]);
  });

Author.sync({ force: true })
  .then(() => Author.destroy({ where: {} }))
  .then(() => {
    Author.bulkCreate([
      {
        firstName: 'George',
        lastName: 'Orwell',
        born: '1903-06-25',
        died: '1950-01-21',
        description: 'https://en.wikipedia.org/wiki/George_Orwell',
      },
      {
        firstName: 'Joanne',
        lastName: 'Rowling',
        born: '1965-07-31',
        description: 'https://en.wikipedia.org/wiki/J._K._Rowling',
      },
      {
        firstName: 'Robert',
        lastName: 'Salvatore',
        born: '1959-01-20',
        description: 'https://en.wikipedia.org/wiki/R._A._Salvatore',
      },
      {
        firstName: 'Herbert',
        lastName: 'Wells',
        born: '1866-09-21',
        died: '1946-08-13',
        description: 'https://en.wikipedia.org/wiki/H._G._Wells',
      },
      {
        firstName: 'Lewis',
        lastName: 'Carroll',
        born: '1832-01-27',
        died: '1898-01-14',
        description: 'https://en.wikipedia.org/wiki/Lewis_Carroll',
      },
      {
        firstName: 'Andrzej',
        lastName: 'Sapkowski',
        born: '1948-06-21',
        description: 'https://en.wikipedia.org/wiki/Andrzej_Sapkowski',
      },
      {
        firstName: 'Clive',
        lastName: 'Lewis',
        born: '1898-11-29',
        died: '1963-11-22',
        description: 'https://en.wikipedia.org/wiki/C._S._Lewis',
      },
    ]);
  });

Book.sync({ force: true })
  .then(() => Book.destroy({ where: {} }))
  .then(() => {
    Book.bulkCreate([
      {
        title: '1984',
        status: 2,
        comment: 'Интересная книжка про политику. Надо бы к ней прочитать Прекрасный мир Хаксли',
        year: 1949,
        currentPage: 304,
        totalPages: 304,
      },
      {
        title: 'Alice\'s Adventures in Wonderland',
        status: 1,
        comment: 'Классика. Хорошо подходит для изучения английского.',
        year: 1865,
        currentPage: 25,
        totalPages: 66,
      },
      {
        title: 'Harry Potter and the Chamber of Secrets',
        status: 2,
        comment: 'Классика фэнтези',
        year: 1997,
        currentPage: 478,
        totalPages: 478,
      },
      {
        title: 'Harry Potter and the Philosopher\'s Stone',
        status: 2,
        comment: 'Классика фэнтези 2',
        year: 1998,
        currentPage: 223,
        totalPages: 223,
      },
      {
        title: 'Wiedźmin',
        status: 1,
        comment: 'Geralt of Rivia is a witcher.',
        year: 2003,
        currentPage: 100,
        totalPages: 320,
      },
      {
        title: 'Harry Potter and the Prisoner of Azkaban',
        status: 2,
        comment: 'Классика фэнтези 3',
        year: 1999,
        currentPage: 350,
        totalPages: 350,
      },
      {
        title: 'Harry Potter and the Order of the Phoenix',
        status: 2,
        comment: 'Классика фэнтези 5',
        year: 2003,
        currentPage: 570,
        totalPages: 570,
      },
      {
        title: 'Harry Potter and the Half-Blood Prince',
        status: 2,
        comment: 'Классика фэнтези 6',
        year: 2005,
        currentPage: 470,
        totalPages: 470,
      },
      {
        title: 'Harry Potter and the Deathly Hallows',
        status: 2,
        comment: 'Классика фэнтези 7',
        year: 2007,
        currentPage: 390,
        totalPages: 390,
      },
      {
        title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
        status: 1,
        comment: 'Книжка с многослойным смыслом.',
        year: 1950,
        currentPage: 30,
        totalPages: 430,
      },
    ]);
  });

BookHasAuthor.sync({ force: true })
  .then(() => BookHasAuthor.destroy({ where: {} }))
  .then(() => {
    BookHasAuthor.bulkCreate([
      {
        book_id: 1,
        author_id: 1,
      },
      {
        book_id: 2,
        author_id: 5,
      },
      {
        book_id: 3,
        author_id: 2,
      },
      {
        book_id: 4,
        author_id: 2,
      },
      {
        book_id: 5,
        author_id: 6,
      },
      {
        book_id: 7,
        author_id: 2,
      },
      {
        book_id: 8,
        author_id: 2,
      },
      {
        book_id: 9,
        author_id: 2,
      },
      {
        book_id: 10,
        author_id: 2,
      },
      {
        book_id: 11,
        author_id: 7,
      },
    ]);
  });

Genre.sync({ force: true })
  .then(() => Genre.destroy({ where: {} }))
  .then(() => {
    Genre.bulkCreate([
      { name: 'Comedy' }, { name: 'Drama' }, { name: 'Fantasy' },
      { name: 'Fiction' }, { name: 'Horror' }, { name: 'Non-fiction' },
      { name: 'Realistic fiction' }, { name: 'Romance novel' },
      { name: 'Satire' }, { name: 'Tragedy' }, { name: 'Tragicomedy' },
    ]);
  });
