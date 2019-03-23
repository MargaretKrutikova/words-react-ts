import { getType } from "typesafe-actions"
import { removeKey } from "../../utils"
import actions, { WordDraftsAction } from "./actions"
import { DraftWordStatus, draftWordStatusMachine } from "./machine"

export type WordDraft = {
  wordId: string
  status: DraftWordStatus,
}

export type WordDraftsState = {
  [k: string]: WordDraft,
}

const initialState: WordDraftsState = {}

const wordDraftReducer = (
  state: WordDraft,
  action: WordDraftsAction,
): WordDraft => {
  const statusActionMap = draftWordStatusMachine[state.status]
  const status = !!statusActionMap ? statusActionMap[action.type] : state.status

  return !status || status === state.status ? state : { ...state, status }
}

const shouldCreateDraft = (action: WordDraftsAction) =>
  action.type === getType(actions.startEditing) ||
  action.type === getType(actions.deleteWord.request)

const getOrCreateWordDraft = (
  state: WordDraftsState,
  action: WordDraftsAction,
): WordDraft | undefined => {
  const wordId = action.payload.id

  const draft = state[wordId]
  if (!draft && shouldCreateDraft(action)) {
    return { wordId, status: "IDLE" }
  }
  return draft
}

const reducer = (
  state: WordDraftsState = initialState,
  action: WordDraftsAction,
): WordDraftsState => {
  if (!action.payload || !action.payload.id) {
    return state
  }

  const currentDraft = getOrCreateWordDraft(state, action)
  if (!currentDraft) {
    return state
  }

  const newDraft = wordDraftReducer(currentDraft, action)
  if (currentDraft === newDraft) {
    return state
  }

  const wordId = action.payload.id

  return newDraft.status === "IDLE"
    ? removeKey(wordId, state)
    : { ...state, [wordId]: newDraft }
}

export const getWordDraftStatus = (
  state: WordDraftsState,
  id: string,
): DraftWordStatus => (state[id] ? state[id].status : "IDLE")

export { actions, initialState }
export default reducer
