import actions, { WordDraftsAction } from "./actions"
export { getWordDraftStatus } from "./reducer"
import { DraftWordStatus } from "./machine"
import reducer, { initialState, WordDraft, WordDraftsState } from "./reducer"

export {
  actions as wordDraftsActions,
  reducer as wordDraftsReducer,
  initialState as wordDraftsInitState,
}

export type DraftWordStatus = DraftWordStatus
export type WordDraftsAction = WordDraftsAction
export type WordDraftsState = WordDraftsState
export type WordDraft = WordDraft
