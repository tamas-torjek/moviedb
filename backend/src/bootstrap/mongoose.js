import mongoose from 'mongoose';
import config from '#config';
import Logger from '#logger';

export default async () => {
  try {
    Logger.info('Connecting to MongoDB...');

    await mongoose.connect(config.db.url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
  } catch (error) {
    Logger.error(error);
  }

  mongoose.connection.on('error', (error) => Logger.error(error));
  mongoose.connection.on('open', () => Logger.info('Connected to MongoDB'));

  return mongoose.connection.db;
};
