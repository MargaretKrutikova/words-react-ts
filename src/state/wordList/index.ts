import reducer, {
  actions,
  initialState,
  WordsAction,
  WordsState,
} from "./reducer"

export {
  actions as wordListActions,
  reducer as wordListReducer,
  initialState as wordListInitState,
}
export type WordsAction = WordsAction
export type WordsState = WordsState
