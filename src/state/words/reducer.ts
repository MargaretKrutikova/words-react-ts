import { Reducer } from "react"
import {
  EditWordAction,
  editWordActions,
  editWordInitState,
  editWordReducer,
  EditWordState,
} from "../editWord"
import {
  WordListAction,
  wordListActions,
  wordListInitState,
  wordListReducer,
  WordListState,
} from "../wordList"

export type WordsState = {
  wordList: WordListState
  wordsUnderEdit: EditWordState,
}

export const initialState: WordsState = {
  wordList: wordListInitState,
  wordsUnderEdit: editWordInitState,
}

export const actions = { ...wordListActions, ...editWordActions }

export type WordsAction = WordListAction | EditWordAction

const reducer: Reducer<WordsState, WordsAction> = (
  state,
  action,
): WordsState => {
  const wordList = wordListReducer(state.wordList, action as WordListAction)
  const wordsUnderEdit = editWordReducer(
    state.wordsUnderEdit,
    action as EditWordAction,
  )

  if (wordList === state.wordList && wordsUnderEdit === state.wordsUnderEdit) {
    return state
  }
  return { wordList, wordsUnderEdit }
}

export default reducer
