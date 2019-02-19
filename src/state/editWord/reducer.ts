import { Reducer } from "react"
import {
  ActionType,
  createAction,
  createAsyncAction,
  getType,
} from "typesafe-actions"
import { WordEntity } from "../../domains/words/model"

const saveWord = createAsyncAction(
  "@@editWord/SAVE",
  "@@editWord/SAVE_SUCCESS",
  "@@editWord/SAVE_ERROR",
)<WordEntity, WordEntity, string>()

const resetStatus = createAction("@@editWord/RESET")

const actions = { saveWord, resetStatus }

export type EditWordAction = ActionType<typeof actions>

export type EditStatus = "IDLE" | "SAVING" | "SAVED" | "ERROR"

export type EditWordState = {
  wordId?: number
  status: EditStatus
  error: string | null,
}

const initialState: EditWordState = {
  error: null,
  status: "IDLE",
}

const reducer: Reducer<EditWordState, EditWordAction> = (
  state = initialState,
  action,
): EditWordState => {
  switch (action.type) {
    case getType(actions.saveWord.request):
      return { ...state, status: "SAVING", error: null }

    case getType(actions.saveWord.success):
      return { ...state, status: "SAVED" }

    case getType(actions.saveWord.failure):
      return { ...state, status: "ERROR", error: action.payload }

    case getType(actions.resetStatus):
      return { ...state, status: "IDLE" }

    default:
      return state
  }
}

export { actions, initialState }
export default reducer
