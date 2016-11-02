/**
 * Created by val on 9/26/16.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './bookRoutes';
import sidemenu from '../../components/sidemenu/sidemenuDirective';
import statusmenu from '../../components/statusmenu/statusmenuDirective';

export class BookController {
  /*@ngInject*/

  constructor($rootScope, $scope, $http) {

    function getStatuses() {
      $http.get('/api/statuses').then((req) => {
        $scope.statuses = req.data;
      });
    }

    function getBooks() {
      $http.get('/api/books').then((res) => {
        $scope.books = res.data;
        console.log($scope.books);
      });
    }

    getStatuses();

    getBooks();

    $scope.addBook = function () {
      if (this.book) {
        let book = this.book;
        let data = {
          title: book.title,
          status: book.status.id,
          comment: book.comment,
          year: book.year,
          currentPage: book.currentPage,
          totalPages: book.totalPages
        };

        // TODO: Remove console.log
        $http.post('/api/books', JSON.stringify(data))
          .then((req) => {
            console.log(req.data);
            console.log('Book has been successfully added.');
          }, (error) => {
            console.log(`There was an error saving. ${error}`);
          });
      } else {
        console.log('No book here');
      }
    };

    $scope.deleteBook = function (book) {
      let bookId = book.id;

      $http.delete(`/api/books/${bookId}`).then(() => {
        getBooks();
      })
    };
  }
}

BookController.$inject = ['$rootScope', '$scope', '$http'];

export default angular.module('myBookListApp.book', [uiRouter, sidemenu,
  statusmenu])
  .config(routing)
  .component('book', {
    template: require('./book.html'),
    controller: BookController
  })
  .name;
