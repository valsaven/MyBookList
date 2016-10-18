/**
 * Created by val on 10/17/16.
 */

import angular from 'angular';

export class HeaderComponent {}

export default angular.module('HeaderComponent', [])
  .component('header', {
    template: require('./header.html'),
    controller: HeaderComponent
  })
  .name;
