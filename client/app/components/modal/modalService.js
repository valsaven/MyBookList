/**
 * Created by val on 10/17/16.
 */

import angular from 'angular';


export class QuickAddService {
  /*@ngInject*/

  constructor() {

  }
}

export default angular.module('services.modal')
  .component('modal', {
    templateUrl: require('./modal.html'),
    controller: QuickAddService
  })
  .name;
