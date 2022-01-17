import './movie.scss';

import { IMAGE_BASE_URL } from '../../services/tmdb';

function Movie({ movie }) {
  return (
    <div className="movie col-1 p-4">
      <img
        className="image"
        src={`${IMAGE_BASE_URL}/w185/${movie.poster_path}`}
        alt="movie poster"
      />
      <div className="vote">{movie.vote_average}</div>
      <div className="title pt-4">{movie.original_title}</div>
    </div>
  );
}

export default Movie;
