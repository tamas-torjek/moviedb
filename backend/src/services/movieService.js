import Movie from '#models/movie.js';
import config from '#config';
import Logger from '#logger';
import { titleCase } from '#src/helpers/stringHelper.js';

export default class MovieService {
  static async getAllMovies() {
    return MovieService.fetchMovies();
  }

  static async searchMovies(keyword, genres) {
    return MovieService.fetchMovies(keyword, genres);
  }

  static async fetchMovies(keyword, genres) {
    try {
      const movies = await Movie.find(MovieService.getDbQueryObject(keyword || '', genres || [])).exec();
      return MovieService.setMoviePosterUrl(movies);
    } catch (error) {
      Logger.error(error);
      return [];
    }
  }

  static getDbQueryObject(keyword = '', genres = []) {
    const queryObject = {};

    if (keyword.length) {
      queryObject.title = new RegExp(keyword, 'i');
    }

    if (genres.length) {
      queryObject.genres = { $all: genres };
    }

    return queryObject;
  }

  static setMoviePosterUrl(movies) {
    return movies.map((item) => {
      const movie = item;
      movie.poster_path = `${config.tmdb.imageBaseUrl}${item.poster_path}`;
      return movie;
    });
  }

  static formatGenresForDbQuery(genres) {
    if (!genres || typeof genres !== 'string' || !genres.length) {
      return [];
    }

    return genres.split('/').map((genre) => titleCase(genre));
  }
}
