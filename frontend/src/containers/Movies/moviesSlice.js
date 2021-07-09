import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MovieService from './movieService';

export const moviesFetchStatuses = {
  IDLE: 0,
  LOADING: 1,
  FULFILLED: 2,
  REJECTED: 3
};

const initialState = {
  status: moviesFetchStatuses.IDLE,
  list: []
};

/**
 * Async reducer to get the movies.
 * @see moviesSlice.extraReducers
 */
export const fetchMoviesAsync = createAsyncThunk('movies/fetchMovies', async (data) => {
  try {
    const { keyword, genres } = data;
    const response = await MovieService.fetchMovies(keyword, genres);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetch: (state, action) => {
      // just a dummy reducer...
      console.log(state, action);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesAsync.pending, (state) => {
        state.status = moviesFetchStatuses.LOADING;
      })
      .addCase(fetchMoviesAsync.fulfilled, (state, action) => {
        state.status = moviesFetchStatuses.FULFILLED;
        state.list = action.payload.count ? action.payload.movies : [];
      });
  }
});

// export const { fetch } = moviesSlice.actions;
export const selectMovies = (state) => state.movies.list;
export const selectStatus = (state) => state.movies.status;

export default moviesSlice.reducer;
