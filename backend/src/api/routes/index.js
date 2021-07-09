import { Router } from 'express';

export default (app) => {
  const route = Router();
  app.use('/', route);

  route.get('/', (req, res) => res.json({ message: 'Working!' }).status(200));
};
