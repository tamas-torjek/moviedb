import bodyParser from 'body-parser';
import cors from 'cors';
import routes from '#api/index.js';
import config from '#config';

export default (app) => {
  app.use(cors());
  app.use(bodyParser.json());

  // Load API routes
  app.use(config.api.prefix, routes());

  /// catch 404 and forward to error handler
  app.use((request, response, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use((error, request, response) => {
    response.status(error.status || 500);
    response.json(error);
  });
};
