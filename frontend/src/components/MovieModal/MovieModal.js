import React from 'react';
import PropTypes from 'prop-types';

function MovieModal(props) {
  const { modalId, movie } = props;

  return (
    <div>
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box h-screen md:h-5/6 overflow-y-scroll">
          {movie ? (
            <div className="block">
              <figure>
                <img src={movie.poster_path} height="50%" className="rounded-md" />
              </figure>

              <h2 className="text-2xl font-bold mt-4 mb-2">{`${movie.title} (${movie.release_date.split('-')[0]})`}</h2>
              <p>{movie.overview}</p>
              <div className="mt-2">
                {movie.genres.map((genre, i) => (
                  <div key={i} className="badge badge-primary badge-sm mr-2">
                    {genre}
                  </div>
                ))}
              </div>
              <label htmlFor={modalId} className="btn btn-sm mt-4">
                Close
              </label>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

MovieModal.propTypes = {
  modalId: PropTypes.string.isRequired,
  movie: PropTypes.object
};

export default MovieModal;
