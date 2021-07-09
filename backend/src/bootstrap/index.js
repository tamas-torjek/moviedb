import Logger from '../services/logger.js';
import expressLoader from './express.js';
import mongooseLoader from './mongoose.js';

export default async (app) => {
  // init DB
  await mongooseLoader();

  // init routes
  await expressLoader(app);
  Logger.info('Express loaded');
};
