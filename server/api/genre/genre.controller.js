/**
 * Created by val on 9/29/16.
 */

/*
 GET     /api/genres        ->  index
 GET     /api/genres/:id    ->  show
 POST    /api/genres        ->  create
 DELETE  /api/genres/:id    ->  destroy
*/

'use strict';

import { Genre } from '../../db';


function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;

  return function (entity) {
    if (entity) {
      return res.status(statusCode).json(entity);
    }

    return null;
  };
}

function removeEntity(res) {
  return function (entity) {
    if (entity) {
      return entity.destroy()
        .then(() => {
          res.status(204).end();
        });
    }
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

// Get a list of Genres
export function index(req, res) {
  return Genre.findAll()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Get a single Genre from the DB
export function show(req, res) {
  return Genre.find({
    where: {
      id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Create a new Genre in the DB
export function create(req, res) {
  return Genre.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Delete a Genre from the DB
export function destroy(req, res) {
  return Genre.find({
    where: {
      id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
