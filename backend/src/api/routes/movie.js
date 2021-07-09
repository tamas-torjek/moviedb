import { Router } from 'express';
import MovieController from '#controllers/movieController.js';

let controller;
const initController = (request, response, next) => {
  if (!controller) {
    controller = new MovieController(request, response);
  } else {
    controller.init(request, response);
  }

  next();
};

export default (app) => {
  const router = Router();
  app.use('/movie', router);

  // todo: add some validation (maybe a middleware with Joi)
  // todo: check out https://www.npmjs.com/package/json-api
  router.get('/genre/*', initController, () => controller.searchMovies());
  router.get('/:keyword/genre/*', initController, () => controller.searchMovies());
  router.get('/:keyword', initController, () => controller.searchMovies());
  router.get('/', initController, () => controller.getAllMovies());
};
