import { Router } from 'express';
import GenreController from '#controllers/genreController.js';

let controller;
const initController = (request, response, next) => {
  if (!controller) {
    controller = new GenreController(request, response);
  } else {
    controller.init(request, response);
  }

  next();
};

export default (app) => {
  const router = Router();
  app.use('/genre', router);

  router.get('/', initController, () => controller.getAllGenres());
};
