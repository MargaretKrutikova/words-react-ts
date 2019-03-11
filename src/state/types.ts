import { NewWordAction, NewWordState } from "./newWord"
import { WordDraftsAction, WordDraftsState } from "./wordDrafts"
import { WordListAction, WordListState } from "./wordList"

export type AppState = {
  wordList: WordListState
  wordDrafts: WordDraftsState
  newWord: NewWordState,
}

export type AppAction = WordListAction | WordDraftsAction | NewWordAction
