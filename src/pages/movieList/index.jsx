import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './movieList.css';

import { getMovieList, getMoreMovieList } from './actions';

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieList.movies);
  const error = useSelector((state) => state.movieList.error);
  const loading = useSelector((state) => state.movieList.loading);

  useEffect(() => {
    dispatch(getMovieList());
  }, [dispatch]);

  const loadMore = () => {
    dispatch(getMoreMovieList());
  };

  return (
    <main style={{ padding: '1rem 0' }}>
      <h1>Movie List</h1>
      {!loading && !error && (
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              <Link to={`/details/${movie.id}`}>{movie.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
      {!loading && !error && (
        <button onClick={() => loadMore()}>Load More</button>
      )}
      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}
    </main>
  );
}

export default MovieList;
