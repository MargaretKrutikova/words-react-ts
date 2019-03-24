import actions, { WordDraftsAction } from "./actions"
import reducer, {
  initialState,
  selectors,
  WordDraft,
  WordDraftsState,
} from "./reducer"

export {
  actions as wordDraftsActions,
  reducer as wordDraftsReducer,
  selectors as wordDraftsSelectors,
  initialState as wordDraftsInitState,
}

export type WordDraftsAction = WordDraftsAction
export type WordDraftsState = WordDraftsState
export type WordDraft = WordDraft
