export const GET_MOVIE_LIST = 'GET_MOVIE_LIST';
export const GET_MOVIE_LIST_LOADING = 'GET_MOVIE_LIST_LOADING';
export const GET_MOVIE_LIST_SUCCESS = 'GET_MOVIE_LIST_SUCCESS';
export const GET_MOVIE_LIST_FAILED = 'GET_MOVIE_LIST_FAILED';

export const GET_MORE_MOVIE_LIST = 'GET_MORE_MOVIE_LIST';
export const GET_MORE_MOVIE_LIST_LOADING = 'GET_MORE_MOVIE_LIST_LOADING';
export const GET_MORE_MOVIE_LIST_SUCCESS = 'GET_MORE_MOVIE_LIST_SUCCESS';
export const GET_MORE_MOVIE_LIST_FAILED = 'GET_MORE_MOVIE_LIST_FAILED';

export const getMovieList = () => ({
  type: GET_MOVIE_LIST,
});

export const getMoreMovieList = () => ({
  type: GET_MORE_MOVIE_LIST,
});
