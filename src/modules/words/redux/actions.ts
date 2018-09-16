import { createAction } from 'redux-actions';
import { PaginatedWords } from '../model';
import {
  FETCH_WORDS,
  FETCH_WORDS_FAILURE,
  FETCH_WORDS_SUCCESS
} from './constants';
import { WordsState } from './types';

export const fetchWords = createAction(
  FETCH_WORDS,
  () => ({ isLoading: true } as WordsState)
);

export const fetchWordsSuccess = createAction(
  FETCH_WORDS_SUCCESS,
  (data: PaginatedWords) => ({ isLoading: false, ...data } as WordsState)
);

export const fetchWordsFailure = createAction(
  FETCH_WORDS_FAILURE,
  () => ({ isLoading: false } as WordsState)
);
