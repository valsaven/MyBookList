/**
 * Created by val on 9/24/16.
 */

'use strict';

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});
