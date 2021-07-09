import axios from 'axios';

class MovieService {
  constructor() {
    this.apiUrlPrefix = 'api/';
  }

  async fetchMovies(keyword = '', genres = []) {
    try {
      const movies = await axios.get(this.getMoviesApiUrl(keyword, genres));
      return movies;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async fetchGenres() {
    try {
      const genres = await axios.get(`${this.apiUrlPrefix}genre`);
      return genres;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  getMoviesApiUrl(keyword, genres) {
    let apiUrl = `${this.apiUrlPrefix}movie/`;

    if (typeof keyword === 'string' && keyword.length) {
      apiUrl += `${keyword}/`;
    }

    if (genres && genres.length) {
      apiUrl += `genre/${genres.map((genre) => genre.toLowerCase()).join('/')}`;
    }

    return apiUrl;
  }
}

export default new MovieService();
