import reducer, {
  actions,
  initialState,
  WordListAction,
  WordListState,
} from "./reducer"

export {
  actions as wordListActions,
  reducer as wordListReducer,
  initialState as wordListInitState,
}
export type WordListState = WordListState
export type WordListAction = WordListAction
