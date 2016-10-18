/**
 * Created by val on 10/17/16.
 */

import angular from 'angular';

export class SidemenuComponent {}

export default angular.module('directives.sidemenu', [])
  .component('sidemenu', {
    template: require('./sidemenu.html'),
    controller: SidemenuComponent
  })
  .name;
