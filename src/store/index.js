import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { createLogger } from 'redux-logger';

import {
  movieListReducer,
  movieListInitialState,
} from '../pages/movieList/reducer';
import { movieListSagas } from '../pages/movieList/sagas';

import {
  movieDetailReducer,
  movieDetailInitialState,
} from '../pages/movieDetail/reducer';
import { movieDetailSagas } from '../pages/movieDetail/sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger({
  collapsed: true,
});

const rootInitialState = {
  movieList: movieListInitialState,
  movieDetail: movieDetailInitialState,
};

const rootReducer = combineReducers({
  movieList: movieListReducer,
  movieDetail: movieDetailReducer,
});

function* rootSaga() {
  yield all([movieListSagas(), movieDetailSagas()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  rootInitialState,
  composeEnhancers(applyMiddleware(logger, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
