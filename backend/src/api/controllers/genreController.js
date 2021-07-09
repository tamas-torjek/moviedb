import BaseController from '#controllers/baseController.js';
import GenreService from '#services/genreService.js';

export default class GenreController extends BaseController {
  async getAllGenres() {
    try {
      const genres = await GenreService.getAllGenres();

      return this.handleResponse({ message: '', genres });
    } catch (error) {
      return this.handleErrorResponse(error);
    }
  }
}
