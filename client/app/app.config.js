/**
 * Created by val on 9/26/16.
 */

'use strict';

export function routeConfig($urlRouterProvider, $locationProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
}
