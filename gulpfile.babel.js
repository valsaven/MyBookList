/**
 * Created by val on 9/24/16.
 */

'use strict';

import _ from 'lodash';
import del from 'del';
import gulpLoadPlugins from 'gulp-load-plugins';
import gulp from 'gulp';
import http from 'http';
import nodemon from 'nodemon';
import open from 'open';
import runSequence from 'run-sequence';

const plugins = gulpLoadPlugins();
let config;

const clientPath = 'client';
const serverPath = 'server';
const paths = {
  client: {
    assets: `${clientPath}/assets/**/*`,
    images: `${clientPath}/assets/img/*`,
    scripts: [`${clientPath}/app/**/*.js`],
    styles: [`${clientPath}/assets/css/*.css`],
    mainStyle: `${clientPath}/app.css`,
    views: `${clientPath}/app/components/**/*.html`,
    mainView: `${clientPath}/index.html`,
  },
  server: {
    scripts: [`${serverPath}/**/*.js`],
  },
  dist: 'dist',
};

/**
 * Helper functions
 */

function onServerLog(log) {
  console.log(plugins.util.colors.white('[') +
    plugins.util.colors.yellow('nodemon') +
    plugins.util.colors.white('] ') +
    log.message);
}

function checkAppReady(cb) {
  const options = {
    host: 'localhost',
    port: config.port,
  };
  http.get(options, () => cb(true))
    .on('error', () => cb(false));
}

function whenServerReady(cb) {
  let serverReady = false;
  const appReadyInterval = setInterval(() =>
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

// env:all
gulp.task('env:all', () => {
  const localConfig = { DOMAIN: 'http://localhost:9000' };
  plugins.env({ vars: localConfig });
});

// clean:tmp
gulp.task('clean:tmp', () => del(['.tmp/**/*', 'db.sqlite'], { dot: true }));

// inject:css
gulp.task('inject:css', () => {
  return gulp.src(paths.client.mainStyle)
    .pipe(plugins.inject(
      gulp.src(_.union(paths.client.styles, [`!${paths.client.mainStyle}`]),
        { read: false })
        .pipe(plugins.sort()),
      {
        starttag: '/* inject:css */',
        endtag: '/* endinject */',
        transform: (filepath) => {
          const newPath = filepath
            .replace(`/${clientPath}/assets/css/`, '/assets/css/')
            .replace(/_(.*).css/, (match, p1, offset, string) => p1);
          return `@import '${newPath}';`;
        },
      },
    ))
    .pipe(gulp.dest(`${clientPath}/`));
});

// start:client
gulp.task('start:client', (cb) => {
  whenServerReady(() => {
    open(`http://localhost:${config.browserSyncPort}`);
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
  runSequence(['clean:tmp', 'inject:css', 'env:all'],
    ['start:server', 'start:client'], 'watch', cb);
});

// build
gulp.task('build', (cb) => {

});
