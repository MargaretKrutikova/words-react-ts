import { NewWordAction } from "./newWord"
import { WordDraftsAction } from "./wordDrafts"
import { WordListAction } from "./wordList"

export type AppAction = WordListAction | WordDraftsAction | NewWordAction
