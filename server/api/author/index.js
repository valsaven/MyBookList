/**
 * Created by val on 9/26/16.
 */

const express = require('express');
const controller = require('./author.controller');

const router = new express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;
