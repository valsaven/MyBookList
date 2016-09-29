/**
 * Created by val on 9/29/16.
 */

const express = require('express');
const controller = require('./status.controller');

const router = new express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);

module.exports = router;
