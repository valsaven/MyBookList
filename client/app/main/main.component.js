/**
 * Created by val on 9/26/16.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import moment from 'moment';

import routing from './main.routes';
import sidemenu from '../components/sidemenu/sidemenu.component';
import statusmenu from '../components/statusmenu/statusmenu.component';

export class MainController {
  /*@ngInject*/

  constructor($http, $scope, $state) {
    this.$http = $http;

    $http.get('/api/statuses').then((req) => {
      $scope.statuses = req.data;
    });

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
}

MainController.$inject = ["$http", "$scope"];

export default angular.module('myBookListApp.main', [uiRouter, sidemenu,
  statusmenu])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
