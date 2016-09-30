/**
 * Created by val on 9/26/16.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import moment from 'moment';

import routing from './main.routes';

export class MainController {
  /*@ngInject*/

  constructor($http, $scope) {
    this.$http = $http;

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

export default angular.module('myBookListApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
