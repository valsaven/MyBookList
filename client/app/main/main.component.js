/**
 * Created by val on 9/26/16.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './main.routes';

export class MainController {
  /*@ngInject*/

  constructor($http) {
    this.$http = $http;
  }
}

export default angular.module('myBookListApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;