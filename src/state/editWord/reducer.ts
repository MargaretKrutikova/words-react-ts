import { Reducer } from "react"
import { getType } from "typesafe-actions"
import actions, { EditWordAction } from "./actions"

export type EditStatus = "IDLE" | "SAVING" | "SAVED" | "ERROR"

const NEW_WORD_TEMP_ID = "NEW_WORD_ID"

type WordUnderEdit = {
  wordId?: string
  status: EditStatus
  error: string | null,
}

type WordsUnderEdit = {
  [k: string]: WordUnderEdit,
}

export type EditWordState = {
  wordsUnderEdit: WordsUnderEdit,
}

const initialState: EditWordState = {
  wordsUnderEdit: {
    [NEW_WORD_TEMP_ID]: {
      error: null,
      status: "IDLE",
    },
  },
}

const wordReducer: Reducer<WordUnderEdit, EditWordAction> = (
  state,
  action,
): WordUnderEdit => {
  switch (action.type) {
    case getType(actions.saveWord.request):
      return { ...state, status: "SAVING", error: null }

    case getType(actions.saveWord.success):
      return { ...state, status: "SAVED" }

    case getType(actions.saveWord.failure):
      return { ...state, status: "ERROR", error: action.payload.error }

    case getType(actions.resetStatus):
      return { ...state, status: "IDLE" }

    default:
      return state
  }
}

const reducer: Reducer<EditWordState, EditWordAction> = (
  state = initialState,
  action,
): EditWordState => {
  switch (action.type) {
    case getType(actions.saveWord.request):
    case getType(actions.saveWord.success):
    case getType(actions.saveWord.failure):
    case getType(actions.resetStatus): {
      const wordId = action.payload.id || NEW_WORD_TEMP_ID
      const wordUnderEdit = state.wordsUnderEdit[wordId]
      if (!wordUnderEdit) {
        return state
      }
      const wordsUnderEdit = {
        ...state.wordsUnderEdit,
        [wordId]: wordReducer(wordUnderEdit, action),
      }
      return { ...state, wordsUnderEdit }
    }
    default: {
      return state
    }
  }
}

export const getNewWord = (state: EditWordState): WordUnderEdit =>
  state.wordsUnderEdit[NEW_WORD_TEMP_ID]

export const getWordUnderEdit = (
  state: EditWordState,
  id: string,
): WordUnderEdit | undefined => state.wordsUnderEdit[id]

export { actions, initialState }
export default reducer
