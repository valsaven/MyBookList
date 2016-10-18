/**
 * Created by val on 9/24/16.
 */

'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { routeConfig } from './app.config';
import main from './main/main.component';
import header from './components/header/header.component';
import sidemenu from './components/sidemenu/sidemenu.component';
import './app.css';

angular.module('myBookListApp', [uiRouter, main, header, sidemenu])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['myBookListApp'], {
      strictDi: true
    });
  });
