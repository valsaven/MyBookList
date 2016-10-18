/**
 * Created by val on 10/18/16.
 */

import angular from 'angular';

export class StatusMenuComponent {}

export default angular.module('directives.statusmenu', [])
  .component('statusmenu', {
    template: require('./statusmenu.html'),
    controller: StatusMenuComponent
  })
  .name;
