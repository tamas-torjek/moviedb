import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectGenres } from './genreSlice';
import GenreFilterItem from '../../components/GenreFilterItem/GenreFilterItem';
import { fetchGenresAsync } from './genreSlice';

function GenreFilter(props) {
  // props
  const { selectedGenres, genreSelectCallback } = props;
  // store selectors
  const genres = useSelector(selectGenres);
  const dispatch = useDispatch();
  // state
  const [genresLoaded, setGenresLoaded] = useState(false);

  const loadGenres = () => {
    if (genresLoaded) {
      return;
    }

    setGenresLoaded(true);
    dispatch(fetchGenresAsync());
  };

  loadGenres();

  return (
    <div tabIndex="0" className="collapse rounded-box collapse-arrow w-full md:w-1/2 mt-2 mb-2">
      <div className="collapse-title text-sm font-medium">Filter by genres</div>
      <div className="collapse-content">
        {genres.map((genre, i) => (
          <GenreFilterItem
            key={i}
            genre={genre}
            selected={selectedGenres.includes(genre.id)}
            genreSelectCallback={genreSelectCallback}
          ></GenreFilterItem>
        ))}
      </div>
    </div>
  );
}

GenreFilter.propTypes = {
  selectedGenres: PropTypes.array,
  genreSelectCallback: PropTypes.func.isRequired
};

export default GenreFilter;
