import http from './http';

export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API_KEY;
const DISCOVER =
  '/discover/movie?api_key={api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page={page}&with_watch_monetization_types=flatrate';
const MOVIE = `/movie/{id}?api_key={api_key}&language=en-US`;

const getMovies = (page) =>
  http.get(
    `${BASE_URL}${DISCOVER.replace('{api_key}', API_KEY).replace(
      '{page}',
      page
    )}`
  );

const getMovieDetail = (id) =>
  http.get(
    `${BASE_URL}${MOVIE.replace('{api_key}', API_KEY).replace('{id}', id)}`
  );

const tmdb = {
  getMovies,
  getMovieDetail,
};

export default tmdb;
