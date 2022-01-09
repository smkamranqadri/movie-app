export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const GET_MOVIE_DETAIL_LOADING = 'GET_MOVIE_DETAIL_LOADING';
export const GET_MOVIE_DETAIL_SUCCESS = 'GET_MOVIE_DETAIL_SUCCESS';
export const GET_MOVIE_DETAIL_FAILED = 'GET_MOVIE_DETAIL_FAILED';

export const getMovieDetail = (id) => ({
  type: GET_MOVIE_DETAIL,
  payload: id,
});
