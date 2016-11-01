/**
 * Created by val on 10/18/16.
 */

import angular from 'angular';

export class StatusMenuComponent {
  /*@ngInject*/
  constructor($scope) {
    // $scope.selectStatus = function (code) {
    //   return console.log(code);
    // };

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
}

StatusMenuComponent.$inject = ["$scope"];

export default angular.module('directives.statusmenu', [])
  .component('statusmenu', {
    template: require('./statusmenu.html'),
    controller: StatusMenuComponent
  })
  .name;
