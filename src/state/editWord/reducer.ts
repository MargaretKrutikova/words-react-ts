import { getType } from "typesafe-actions"
import actions, { EditWordAction } from "./actions"

export type EditStatus = "ACTIVE" | "SAVING" | "SAVED" | "ERROR"

const NEW_WORD_TEMP_ID = "NEW_WORD_ID"

export type WordUnderEdit = {
  wordId?: string
  status: EditStatus
  error: string | null,
}

export type WordsUnderEdit = {
  [k: string]: WordUnderEdit,
}

const initialState: WordsUnderEdit = {
  [NEW_WORD_TEMP_ID]: {
    error: null,
    status: "ACTIVE",
  },
}

const wordReducer = (
  state: WordUnderEdit = {} as WordUnderEdit,
  action: EditWordAction,
): WordUnderEdit => {
  switch (action.type) {
    case getType(actions.updateWord.request):
      return { ...state, status: "SAVING", error: null }

    case getType(actions.updateWord.success):
      return { ...state, status: "SAVED" }

    case getType(actions.updateWord.failure):
      return { ...state, status: "ERROR", error: action.payload.error }

    case getType(actions.startEditing): {
      const wordId = action.payload.id
      return { ...state, status: "ACTIVE", error: null, wordId }
    }

    case getType(actions.resetAdding):
      return { ...state, error: null, status: "ACTIVE" }

    default:
      return state
  }
}

export const keys = Object.keys as <T>(o: T) => Array<Extract<keyof T, string>>

const removeKey = (key: string, { [key]: _, ...rest }) => rest

const reducer = (
  state: WordsUnderEdit = initialState,
  action: EditWordAction,
): WordsUnderEdit => {
  switch (action.type) {
    case getType(actions.addWord.request):
    case getType(actions.addWord.failure):
    case getType(actions.addWord.success):
    case getType(actions.resetAdding): {
      const newWord = getNewWordEditState(state)
      return { ...state, [NEW_WORD_TEMP_ID]: wordReducer(newWord, action) }
    }

    case getType(actions.updateWord.request):
    case getType(actions.updateWord.failure):
    case getType(actions.updateWord.success): {
      const { id } = action.payload
      const word = getWordEditState(state, id)
      return !!word ? { ...state, [id]: wordReducer(word, action) } : state
    }

    case getType(actions.doneEditing):
      return removeKey(action.payload.id, state)

    case getType(actions.startEditing):
      return { ...state, [action.payload.id]: wordReducer(undefined, action) }

    default:
      return state
  }
}

export const getNewWordEditState = (state: WordsUnderEdit): WordUnderEdit =>
  state[NEW_WORD_TEMP_ID]

export const getWordEditState = (
  state: WordsUnderEdit,
  id: string,
): WordUnderEdit | undefined => state[id]

export { actions, initialState }
export default reducer
