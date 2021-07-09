import Logger from '#logger';
import Genre from '#models/genre.js';

export default class GenreService {
  static async getAllGenres() {
    return GenreService.fetchGenres();
  }

  static async fetchGenres() {
    try {
      const genres = await Genre.find({}).exec();
      return genres;
    } catch (error) {
      Logger.error(error);
      return [];
    }
  }
}
