import React from 'react';
import PropTypes from 'prop-types';

function MovieCard(props) {
  const { modalId, movie, selectCallback } = props;

  return (
    <div className="w-1/2 md:w-1/4 p-1">
      <div className="card shadow-xl image-full compact">
        <figure>
          <img src={movie.poster_path} />
        </figure>
        <div className="justify-end card-body">
          <h2 className="card-title text-base md:text-lg">{movie.title}</h2>
          <p className="text-sm md:text-base">{movie.tagline}</p>
          <div className="card-actions">
            <label
              onClick={() => selectCallback(movie)}
              htmlFor={modalId}
              className="btn btn-primary modal-button btn-sm text-xs md:btn-md md:text-s"
            >
              Details
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  modalId: PropTypes.string.isRequired,
  movie: PropTypes.object.isRequired,
  selectCallback: PropTypes.func.isRequired
};

export default MovieCard;
