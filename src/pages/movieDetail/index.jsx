import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './movieDetail.css';

import { getMovieDetail } from './actions';

function MovieDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movieDetail.movie);
  const error = useSelector((state) => state.movieDetail.error);
  const loading = useSelector((state) => state.movieDetail.loading);

  useEffect(() => {
    dispatch(getMovieDetail(id));
  }, [dispatch, id]);

  return (
    <main style={{ padding: '1rem 0' }}>
      <Link to="/">
        <button>Back</button>
      </Link>
      {!loading && !error && (
        <>
          <h1>{movie.original_title}</h1>
          <p>{movie.overview}</p>
        </>
      )}
      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}
    </main>
  );
}

export default MovieDetail;
