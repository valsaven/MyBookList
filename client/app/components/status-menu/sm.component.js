/**
 * Created by val on 9/29/16.
 */

import angular from 'angular';

export default angular.module('myBookListApp.statusMenu', [])
  .component('statusMenu', {
    template: require('./template.html')
  })
  .name;
