/**
 * Created by val on 9/26/16.
 */

'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('book', {
    url: '/',
    template: '<book></book>'
  });
}
