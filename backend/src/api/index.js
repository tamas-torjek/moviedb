import { Router } from 'express';
import index from '#routes/index.js';
import movie from '#routes/movie.js';
import genre from '#routes/genre.js';

export default () => {
  const app = Router();
  index(app);
  movie(app);
  genre(app);

  return app;
};
