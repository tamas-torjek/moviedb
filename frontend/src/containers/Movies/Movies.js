import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieModal from '../../components/MovieModal/MovieModal';
import { selectMovies } from './moviesSlice';

function Movies() {
  const modalId = 'MovieModal';
  // store selectors
  const movies = useSelector(selectMovies);
  // state
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="flex justify-start align-top flex-wrap">
      <MovieModal modalId={modalId} movie={selectedMovie}></MovieModal>

      {movies.map((movie, i) => (
        <MovieCard key={i} modalId={modalId} movie={movie} selectCallback={(m) => setSelectedMovie(m)}></MovieCard>
      ))}
    </div>
  );
}

export default Movies;
