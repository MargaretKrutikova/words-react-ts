import { Reducer } from 'redux';
import { Action, combineActions, handleActions } from 'redux-actions';
import { fetchWords, fetchWordsFailure, fetchWordsSuccess } from './actions';
import { WordsState } from './types';

const initialState: WordsState = {
  items: [],
  total: 0,
  error: null,
  isLoading: false
};

const reducer: Reducer<WordsState> = handleActions(
  {
    [combineActions(
      fetchWords,
      fetchWordsFailure,
      fetchWordsSuccess
    ).toString()]: (state: WordsState, action: Action<WordsState>) => {
      return { ...state, ...action.payload };
    }
  },
  initialState
);

export default reducer;
