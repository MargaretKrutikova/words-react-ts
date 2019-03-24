import { AnyAction } from "redux"
import { getType } from "typesafe-actions"
import { AsyncActionBuilderConstructor } from "typesafe-actions/dist/create-async-action"
import { AppState } from "../../../redux"
import { removeKey } from "../../utils"
import actions, { WordDraftsAction } from "./actions"

export type WordDraft = {
  wordId: string
  isProcessing: boolean
  updateStatus: "success" | "error" | null
  deleteStatus: "success" | "error" | null
  isEditDialogOpen: boolean,
}

export type WordDraftsState = {
  [k: string]: WordDraft,
}

const initialState: WordDraftsState = {}
const wordDraftInitialState = (wordId: string): WordDraft => ({
  wordId,
  isEditDialogOpen: false,
  isProcessing: false,
  updateStatus: null,
  deleteStatus: null,
})

const wordDraftReducer = (
  state: WordDraft,
  action: WordDraftsAction,
): WordDraft => {
  switch (action.type) {
    case getType(actions.updateWord.request):
      return { ...state, isProcessing: true, updateStatus: null }

    case getType(actions.updateWord.success):
      return { ...state, isProcessing: false, updateStatus: "success" }

    case getType(actions.updateWord.failure):
      return { ...state, isProcessing: false, updateStatus: "error" }

    case getType(actions.deleteWord.request):
      return { ...state, isProcessing: true, deleteStatus: null }

    case getType(actions.deleteWord.success):
      return { ...state, isProcessing: false, deleteStatus: "success" }

    case getType(actions.deleteWord.failure):
      return { ...state, isProcessing: false, deleteStatus: "error" }

    case getType(actions.toggleEditDialogOpen):
      return { ...state, isEditDialogOpen: !state.isEditDialogOpen }
    default:
      return state
  }
}

const isAsyncAction = (
  actionBuilder: AsyncActionBuilderConstructor<any, any, any, any, any, any>,
  action: AnyAction,
) =>
  getType(actionBuilder.request) === action.type ||
  getType(actionBuilder.success) === action.type ||
  getType(actionBuilder.failure) === action.type

const reducer = (
  state: WordDraftsState = initialState,
  action: WordDraftsAction,
): WordDraftsState => {
  if (
    isAsyncAction(actions.updateWord, action) ||
    isAsyncAction(actions.deleteWord, action) ||
    action.type === getType(actions.toggleEditDialogOpen)
  ) {
    const wordId = action.payload.id
    const currentDraft = state[wordId] || wordDraftInitialState(wordId)

    return { ...state, [wordId]: wordDraftReducer(currentDraft, action) }
  }

  if (action.type === getType(actions.doneProcessing)) {
    const wordId = action.payload.id
    return removeKey(wordId, state)
  }

  if (!action.payload || !action.payload.id) {
    return state
  }

  return state
}

const getWordDraftOrDefault = (state: AppState, id: string) =>
  state.wordDrafts[id] || wordDraftInitialState(id)

const selectors = {
  getWordIsProcessing: (state: AppState, id: string) =>
    getWordDraftOrDefault(state, id).isProcessing,

  getIsEditDialogOpen: (state: AppState, id: string) =>
    getWordDraftOrDefault(state, id).isEditDialogOpen,
}

export { actions, initialState, selectors }
export default reducer
