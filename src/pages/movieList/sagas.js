import { put, takeEvery, select } from 'redux-saga/effects';

import {
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_FAILED,
  GET_MOVIE_LIST_LOADING,
  GET_MORE_MOVIE_LIST,
  GET_MORE_MOVIE_LIST_SUCCESS,
  GET_MORE_MOVIE_LIST_FAILED,
  GET_MORE_MOVIE_LIST_LOADING,
} from './actions';

import tmdb from '../../services/tmdb';

export function* getMovieList() {
  yield put({ type: GET_MOVIE_LIST_LOADING });
  const {
    movieList: { page },
  } = yield select();
  const { res, err } = yield tmdb.getMovies(page);
  if (err) {
    return yield put({
      type: GET_MOVIE_LIST_FAILED,
      payload: 'Something went wrong, Please contact support!',
    });
  }
  yield put({ type: GET_MOVIE_LIST_SUCCESS, payload: res.data.results });
}
export function* getMoreMovieList() {
  yield put({ type: GET_MORE_MOVIE_LIST_LOADING });
  const {
    movieList: { page },
  } = yield select();
  const { res, err } = yield tmdb.getMovies(page);
  if (err) {
    return yield put({
      type: GET_MORE_MOVIE_LIST_FAILED,
      payload: 'Something went wrong, Please contact support!',
    });
  }
  yield put({ type: GET_MORE_MOVIE_LIST_SUCCESS, payload: res.data.results });
}

export function* movieListSagas() {
  yield takeEvery(GET_MOVIE_LIST, getMovieList);
  yield takeEvery(GET_MORE_MOVIE_LIST, getMoreMovieList);
}
