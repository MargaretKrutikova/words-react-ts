import { EditWordAction, WordsUnderEdit } from "./editWord"
import { WordListAction, WordListState } from "./wordList"

export type AppState = {
  wordList: WordListState
  wordsUnderEdit: WordsUnderEdit,
}

export type AppAction = WordListAction | EditWordAction
