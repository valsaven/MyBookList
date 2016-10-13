/**
 * Created by val on 9/26/16.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import moment from 'moment';

import routing from './main.routes';

export class MainController {
  /*@ngInject*/

  constructor($http, $scope, $state) {
    this.$http = $http;

    $http.get('/api/statuses').then((req) => {
      $scope.statuses = req.data;
    });

    $scope.allBooks = function () {
      $scope.selectedStatus = undefined;
    };

    $scope.reading = function () {
      $scope.selectedStatus = 1;
    };

    $scope.completed = function () {
      $scope.selectedStatus = 2;
    };

    $scope.onHold = function () {
      $scope.selectedStatus = 3;
    };

    $scope.dropped = function () {
      $scope.selectedStatus = 4;
    };

    $scope.planToWatch = function () {
      $scope.selectedStatus = 5;
    };

    $scope.addBook = function () {
      if (this.book) {
        let book = this.book;
        let d = new Date();
        let data = {
          title: book.title,
          status: book.status.id,
          comment: book.comment,
          created: d,
          currentPage: book.currentPage,
          totalPages: book.totalPages
        };

        $http.post('/api/books', data).then(() => {
          console.log('Book has been successfully added.');
        }, () => {
          console.log("There was an error saving");
        });
      } else {
        console.log('No book here');
      }
    };

    $scope.deleteBook = function (book) {
      $http.delete(`/api/books/${book._id}`);
    };
  }

  $onInit() {
    this.$http.get('/api/books')
      .then((res) => {
        this.books = res.data;
        this.books.forEach(function (book) {
          book.created = moment(book.created).format('LL');
        });
      });
  }

  updatebook() {

  }
}

MainController.$inject = ["$http", "$scope"];

export default angular.module('myBookListApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
