/**
 * Created by val on 9/29/16.
 */

const express = require('express');
const controller = require('./genre.controller');

const router = new express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.delete('/:id', controller.destroy);

module.exports = router;
