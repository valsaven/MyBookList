/**
 * Created by val on 10/18/16.
 */

import angular from 'angular';

export class CoverComponent {}

export default angular.module('directives.cover', [])
  .component('cover', {
    template: require('./cover.html'),
    controller: CoverComponent
  })
  .name;
