import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { ApplicationState, rootReducer } from './state';

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const middlewares = [createLogger()];

export default function store(initialState?: ApplicationState) {
  return createStore(
    rootReducer,
    initialState || {},
    composeEnhancers(applyMiddleware(...middlewares))
  );
}
