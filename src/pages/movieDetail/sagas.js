import { put, takeEvery } from 'redux-saga/effects';

import {
  GET_MOVIE_DETAIL,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_FAILED,
  GET_MOVIE_DETAIL_LOADING,
} from './actions';

import tmdb from '../../services/tmdb';

export function* getMovieDetail({ payload: id }) {
  yield put({ type: GET_MOVIE_DETAIL_LOADING });
  const { res, err } = yield tmdb.getMovieDetail(id);
  if (err) {
    return yield put({
      type: GET_MOVIE_DETAIL_FAILED,
      payload: 'Something went wrong, Please contact support!',
    });
  }
  yield put({ type: GET_MOVIE_DETAIL_SUCCESS, payload: res.data });
}

export function* movieDetailSagas() {
  yield takeEvery(GET_MOVIE_DETAIL, getMovieDetail);
}
