import actions, { WordDraftsAction } from "./actions"
export { getWordDraftStatus } from "./reducer"
import {
  DraftWordStatus,
  isDeleteMode,
  isEditMode,
  isIdleMode,
} from "./machine"
import reducer, { initialState, WordDraft, WordDraftsState } from "./reducer"

export {
  actions as wordDraftsActions,
  reducer as wordDraftsReducer,
  initialState as wordDraftsInitState,
  isDeleteMode,
  isEditMode,
  isIdleMode,
}

export type DraftWordStatus = DraftWordStatus
export type WordDraftsAction = WordDraftsAction
export type WordDraftsState = WordDraftsState
export type WordDraft = WordDraft
