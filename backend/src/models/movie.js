import mongoose from 'mongoose';

const Movie = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  genres: [String],
  homepage: String,
  id: Number,
  imdb_id: String,
  original_language: String,
  original_title: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  release_date: String,
  runtime: Number,
  tagline: String,
  title: String,
  vote_average: Number
});

export default mongoose.model('Movie', Movie, 'movies');
