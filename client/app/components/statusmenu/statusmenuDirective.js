/**
 * Created by val on 10/18/16.
 */

import angular from 'angular';

export class StatusMenuComponent {
  /*@ngInject*/
  constructor($rootScope, $scope) {

    $scope.selectStatus = function (statusId) {
      return statusId
        ? $rootScope.selectedStatus = statusId
        : $rootScope.selectedStatus = undefined;
    };
  }
}

StatusMenuComponent.$inject = ['$rootScope', '$scope'];

export default angular.module('directives.statusmenu', [])
  .component('statusmenu', {
    template: require('./statusmenu.html'),
    controller: StatusMenuComponent
  })
  .name;
