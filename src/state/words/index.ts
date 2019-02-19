import reducer, {
  actions,
  initialState,
  WordsAction,
  WordsState,
} from "./reducer"

export {
  actions as wordsActions,
  reducer as wordsReducer,
  initialState as wordsInitState,
}
export type WordsAction = WordsAction
export type WordsState = WordsState
