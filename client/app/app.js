/**
 * Created by val on 9/24/16.
 */

'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { routeConfig } from './app.config';

import main from './main/main.component';
import cover from './components/cover/cover.component';
import header from './components/header/header.component';

import './app.css';

angular.module('myBookListApp', [uiRouter, main, cover, header])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['myBookListApp'], {
      strictDi: true
    });
  });
