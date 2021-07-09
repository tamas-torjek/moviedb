import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../containers/Movies/moviesSlice';
import genresReducer from '../containers/GenreFilter/genreSlice';

export const store = configureStore({
  reducer: {
    genres: genresReducer,
    movies: moviesReducer
  }
});
