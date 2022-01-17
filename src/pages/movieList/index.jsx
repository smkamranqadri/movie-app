import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './movieList.scss';

import { getMovieList, getMoreMovieList } from './actions';
import Movie from '../../components/movie';
import TopBar from '../../components/topBar';
import SideBar from '../../components/sideBar';
import ToolBar from '../../components/toolBar';

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
    <>
      <TopBar />
      <div className="movie-list-container row">
        <SideBar />
        <main className="col-10" >
          <ToolBar />
          {!loading && !error && (
            <div className="row d-flex justify-content-around">
              {movies.map((movie) => (
                <Movie movie={movie} />
              ))}
            </div>
          )}
          {!loading && !error && (
            <button onClick={() => loadMore()}>Load More</button>
          )}
          {loading && <p>Loading</p>}
          {error && <p>{error}</p>}
        </main>
      </div>
    </>
  );
}

export default MovieList;
