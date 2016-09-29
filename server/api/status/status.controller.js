/**
 * Created by val on 9/29/16.
 */

/*
 GET     /api/statuses        ->  index
 GET     /api/statuses/:id    ->  show
*/

'use strict';

import { Status } from '../../db';


function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;

  return function (entity) {
    if (entity) {
      return res.status(statusCode).json(entity);
    }

    return null;
  };
}

function handleEntityNotFound(res) {
  return function (entity) {
    if (!entity) {
      res.status(404).end();

      return null;
    }

    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;

  return function (err) {
    res.status(statusCode).send(err);
  };
}

// Get a list of Statuses
export function index(req, res) {
  return Status.findAll()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Get a single Status from the DB
export function show(req, res) {
  return Status.find({
    where: {
      id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}
