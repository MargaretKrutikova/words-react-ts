export { WordEntity, PaginatedWords, createWord, copyWord } from './model';
export { default as WordsApi } from './api/service';
export { WordsState } from './redux/types';
export { default as wordsReducer } from './redux/reducers';
import * as wordsActions from './redux/actions';

export const actions = wordsActions;
