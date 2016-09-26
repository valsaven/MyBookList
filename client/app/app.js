/**
 * Created by val on 9/24/16.
 */

'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { routeConfig } from './app.config';
import main from './main/main.component';
import './app.css';

angular.module('myBookListApp', [uiRouter, main])
  .config(routeConfig);
