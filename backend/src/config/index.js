import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env = dotenv.config();

if (env.error) {
  throw env.error;
}

const getDbUrl = () =>
  process.env.MONGODB_URI.replace('<passwd>', process.env.MONGODB_PASSWD).replace('<name>', process.env.MONGODB_NAME);

export default {
  port: parseInt(process.env.PORT, 10),
  db: {
    name: process.env.MONGODB_NAME,
    passwd: process.env.MONGODB_PASSWD,
    url: getDbUrl()
  },
  api: {
    prefix: '/api'
  },
  log: {
    level: process.env.NODE_ENV === 'development' ? process.env.LOG_LEVEL_DEV : process.env.LOG_LEVEL_PROD
  },
  tmdb: {
    imageBaseUrl: process.env.TMDB_IMAGE_BASE_URL
  }
};
