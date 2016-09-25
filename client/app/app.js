/**
 * Created by val on 9/24/16.
 */

'use strict';

import angular from 'angular';
import './app.css';

angular
  .module('myBookListApp', [main])
  .config(['$urlRouterProvider, $locationProvider',
    function ($urlRouterProvider, $locationProvider) {
      'ngInject';
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
    }]);

angular.element(document)
  .ready(() => {
    
  });
