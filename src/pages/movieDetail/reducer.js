import {
  GET_MOVIE_DETAIL_LOADING,
  GET_MOVIE_DETAIL_FAILED,
  GET_MOVIE_DETAIL_SUCCESS,
} from './actions';

export const movieDetailInitialState = {
  movie: {},
  error: '',
  loading: false,
};

export const movieDetailReducer = (
  state = movieDetailInitialState,
  { type, payload }
) => {
  switch (type) {
    case GET_MOVIE_DETAIL_LOADING:
      return { ...state, loading: true };
    case GET_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        movie: payload,
        loading: false,
        error: '',
      };
    case GET_MOVIE_DETAIL_FAILED:
      return {
        ...state,
        movie: {},
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
