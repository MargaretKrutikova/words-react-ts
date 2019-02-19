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
  editWord: EditWordState,
}

export const initialState: WordsState = {
  wordList: wordListInitState,
  editWord: editWordInitState,
}

export const actions = { ...wordListActions, ...editWordActions }

export type WordsAction = WordListAction | EditWordAction

const reducer: Reducer<WordsState, WordsAction> = (
  state,
  action,
): WordsState => {
  const wordList = wordListReducer(state.wordList, action as WordListAction)
  const editWord = editWordReducer(state.editWord, action as EditWordAction)

  if (wordList === state.wordList && editWord === state.editWord) {
    return state
  }
  return { wordList, editWord }
}

export default reducer
