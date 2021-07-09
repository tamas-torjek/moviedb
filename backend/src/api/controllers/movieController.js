import MovieService from '#services/movieService.js';
import BaseController from '#controllers/baseController.js';
import Logger from '#logger';

export default class MovieController extends BaseController {
  async searchMovies() {
    try {
      const movies = await MovieService.searchMovies(
        this.request.params.keyword,
        MovieService.formatGenresForDbQuery(this.request.params[0] || null)
      );

      return this.processResults(movies);
    } catch (error) {
      Logger.error(error);
      return this.handleErrorResponse(error);
    }
  }

  async getAllMovies() {
    try {
      const movies = await MovieService.getAllMovies();

      return this.processResults(movies);
    } catch (error) {
      return this.handleErrorResponse(error);
    }
  }

  processResults(results) {
    if (!results.length) {
      return this.handleResponse({ message: 'No movies found', count: 0, movies: [] });
    }

    return this.handleResponse({ message: '', count: results.length, movies: results });
  }
}
