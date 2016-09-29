/**
 * Created by val on 9/26/16.
 */

'use strict';

import path from 'path';

export default function (app) {
  // Routes
  app.use('/api/authors', require('./api/author'));
  app.use('/api/books', require('./api/book'));
  app.use('/api/genres', require('./api/genre'));
  app.use('/api/statuses', require('./api/status'));

  app.route('/*').get((req, res) => {
    res.sendFile(path.resolve(`${app.get('appPath')}/index.html`));
  });
}
