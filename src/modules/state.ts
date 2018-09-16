import { combineReducers, Reducer } from 'redux';
import { wordsReducer, WordsState } from './words';

// global state of the application
export type ApplicationState = {
  words: WordsState;
};

export const rootReducer: Reducer<ApplicationState> = combineReducers({
  words: wordsReducer
});
