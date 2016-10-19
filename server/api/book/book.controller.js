/**
 * Created by val on 9/26/16.
 */

/*
 GET     /api/books        ->  index
 GET     /api/books/:id    ->  show
 POST    /api/books        ->  create
 PUT     /api/books/:id    ->  upsert
 PATCH   /api/books/:id    ->  patch
 DELETE  /api/books/:id    ->  destroy
*/

'use strict';

import jsonpatch from 'fast-json-patch';
import { Book } from '../../db';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;

  return function (entity) {
    if (entity) {
      return res.status(statusCode).json(entity);
    }

    return null;
  };
}

function patchUpdates(patches) {
  return function (entity) {
    try {
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch (err) {
      return Promise.reject(err);
    }

    return entity.save();
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

// Get a list of Books
export function index(req, res) {
  return Book.findAll()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Get a single Book from the DB
export function show(req, res) {
  return Book.find({
    where: {
      id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Create a new Book in the DB
// TODO: Remove console.log
export function create(req, res) {
  console.log(req.body);
  return Book.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upsert the given Book in the DB at the specified ID
export function upsert(req, res) {
  if (req.body.id) {
    delete req.body.id;
  }

  return Book.upsert(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Update an existing Book in the DB
export function patch(req, res) {
  if (req.body.id) {
    delete req.body.id;
  }

  return Book.find({
    where: {
      id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Delete a Book from the DB
export function destroy(req, res) {
  return Book.find({
    where: {
      id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
