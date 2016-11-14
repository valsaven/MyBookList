/**
 * Created by val on 9/24/16.
 */

'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { routeConfig } from './app.config';

import book from './components/book/bookController';
import cover from './components/cover/coverDirective';
import header from './components/header/headerDirective';

import '../app.css';

angular.module('myBookListApp', [uiRouter, book, cover, header])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['myBookListApp'], {
      strictDi: true,
    });
  });
