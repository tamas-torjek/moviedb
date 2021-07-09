import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchMoviesAsync } from '../Movies/moviesSlice';
import GenreFilter from '../GenreFilter/GenreFilter';

function SearchBlock(props) {
  // props
  const { visible } = props;
  // states
  const [keyword, setKeyword] = useState('');
  const [genres, setGenres] = useState([]);

  const dispatch = useDispatch();

  const getMovies = () => {
    // only get movies if the keyword is empty or at least 3 characters long
    if (!keyword || keyword.length > 2 || genres.length) {
      dispatch(fetchMoviesAsync({ keyword, genres }));
    }
  };

  const selectGenre = (genreName, selected) => {
    console.log(genreName, selected, genres, genres.indexOf(genreName));

    const exists = genres.includes(genreName);

    if ((selected && exists) || (!selected && !exists)) {
      return;
    }

    // add genre
    if (selected) {
      setGenres([...genres, genreName]);
      return;
    }

    // remove genre
    setGenres(genres.filter((g) => g !== genreName));
  };

  useEffect(() => {
    // delay the request when typing the keyword
    // to completely eliminate this issue, use a search button
    const timeOutId = setTimeout(() => getMovies(), 600);
    return () => clearTimeout(timeOutId);
  }, [keyword, genres]);

  return (
    <div className={`${visible ? 'flex' : 'hidden'} justify-center flex-wrap`}>
      <input
        value={keyword}
        onInput={(e) => setKeyword(e.target.value)}
        type="text"
        placeholder="Search"
        className="w-full pr-16 input input-primary input-bordered bg-base-200"
      />

      <GenreFilter selectedGenres={genres} genreSelectCallback={selectGenre}></GenreFilter>
    </div>
  );
}

SearchBlock.propTypes = {
  visible: PropTypes.bool
};

export default SearchBlock;
