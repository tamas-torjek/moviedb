import React from 'react';
import PropTypes from 'prop-types';

function GenreFilterItem(props) {
  // props
  const { genre, selected, genreSelectCallback } = props;

  return (
    <div className="form-control">
      <label className="cursor-pointer label">
        <span className="label-text">{genre.name}</span>
        <div>
          <input
            type="checkbox"
            checked={selected ? 'checked' : null}
            onClick={(e) => genreSelectCallback(e.target.value, e.target.checked)}
            value={genre.name}
            className="checkbox checkbox-primary"
          />
          <span className="checkbox-mark"></span>
        </div>
      </label>
    </div>
  );
}

GenreFilterItem.propTypes = {
  genre: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  genreSelectCallback: PropTypes.func.isRequired
};

export default GenreFilterItem;
