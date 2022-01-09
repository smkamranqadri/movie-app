import {
  GET_MOVIE_LIST_LOADING,
  GET_MOVIE_LIST_FAILED,
  GET_MOVIE_LIST_SUCCESS,
  GET_MORE_MOVIE_LIST_LOADING,
  GET_MORE_MOVIE_LIST_FAILED,
  GET_MORE_MOVIE_LIST_SUCCESS,
} from './actions';

export const movieListInitialState = {
  movies: [],
  page: 1,
  error: '',
  loading: false,
};

export const movieListReducer = (
  state = movieListInitialState,
  { type, payload }
) => {
  switch (type) {
    case GET_MOVIE_LIST_LOADING:
    case GET_MORE_MOVIE_LIST_LOADING:
      return { ...state, loading: true };
    case GET_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        movies: payload,
        loading: false,
        error: '',
        page: state.page + 1,
      };
    case GET_MORE_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        movies: [...state.movies, ...payload],
        loading: false,
        error: '',
        page: state.page + 1,
      };
    case GET_MOVIE_LIST_FAILED:
    case GET_MORE_MOVIE_LIST_FAILED:
      return {
        ...state,
        movies: [],
        loading: false,
        error: payload,
        page: 1,
      };
    default:
      return state;
  }
};
