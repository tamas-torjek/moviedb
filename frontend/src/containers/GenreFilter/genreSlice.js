import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MovieService from '../Movies/movieService';

export const genresFetchStatuses = {
  IDLE: 0,
  LOADING: 1,
  FULFILLED: 2,
  REJECTED: 3
};

const initialState = {
  status: genresFetchStatuses.IDLE,
  list: []
};

/**
 * Async reducer to get the movies.
 * @see genresSlice.extraReducers
 */
export const fetchGenresAsync = createAsyncThunk('genres/fetchGenres', async () => {
  try {
    const response = await MovieService.fetchGenres();
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenresAsync.pending, (state) => {
        state.status = genresFetchStatuses.LOADING;
      })
      .addCase(fetchGenresAsync.fulfilled, (state, action) => {
        state.status = genresFetchStatuses.FULFILLED;
        state.list = action.payload.genres.sort((a, b) => a.name.localeCompare(b.name));
      });
  }
});

// export const { fetch } = moviesSlice.actions;
export const selectGenres = (state) => state.genres.list;
export const selectGenresStatus = (state) => state.genres.status;

export default genresSlice.reducer;
