/**
 * Created by val on 9/24/16.
 */

'use strict';

import gulp from 'gulp';
import http from 'http';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import nodemon from 'nodemon';

var plugins = gulpLoadPlugins();
var config;

const clientPath = 'client';
const serverPath = 'server';
const paths = {
  client: {
    assets: `${clientPath}/assets/**/*`,
    images: `${clientPath}/assets/images/*`,
    scripts: [`${clientPath}/**/*.js`],
    styles: [`${clientPath}/app/**/*.css`],
    mainStyle: `${clientPath}/app/app.css`,
    views: `${clientPath}/app/**/*.html`
  },
  server: {
    scripts: [`${serverPath}/**/*.js`]
  },
  dist: 'dist'
};

/**
 * Helper functions
 */

function onServerLog(log) {
  console.log(plugins.util.colors.white('[') +
    plugins.util.colors.yellow('nodemon') +
    plugins.util.colors.white(']') +
    log.message);
}

function checkAppReady(cb) {
  let options = {
    host: 'localhost',
    port: config.port
  };
  http.get(options, () => cb(true))
    .on('error', () => cb(false));

}

function whenServerReady(cb) {
  let serverReady = false;
  let appReadyInterval = setInterval(() =>
      checkAppReady((ready) => {
        if (!ready || serverReady) {
          return;
        }
        clearInterval(appReadyInterval);
        serverReady = true;
        cb();
      }),
    100);
}

/**
 * Tasks
 */

// start:client
gulp.task('start:client', (cb) => {
  whenServerReady(() => {
    open('http://localhost:' + config.browserSyncPort);
    cb();
  });
});

// start:server
gulp.task('start:server', () => {
  process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
  config = require(`./${serverPath}/config/env`);
  nodemon(`-w ${serverPath} ${serverPath}`).on('log', onServerLog);
});

// watch
gulp.task('watch', () => {
  plugins.watch(paths.server.scripts)
    .pipe(plugins.plumber());
});

// serve
gulp.task('serve', (cb) => {
  runSequence(
    ['start:server', 'start:client'],
    'watch',
    cb
  );
});
