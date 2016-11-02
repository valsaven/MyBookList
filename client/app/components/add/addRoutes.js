/**
 * Created by val on 11/1/16.
 */

'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('add', {
    url: '/add',
    templateUrl: 'add.html'
  });
}
