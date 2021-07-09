import express from 'express';
import config from '#config';

async function startServer() {
  const app = express();

  (async () => (await import('./bootstrap/index.js')).default(app))();

  app.listen(config.port).on('error', (error) => {
    throw new Error(error);
  });
}

startServer();
