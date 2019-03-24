import { getType } from "typesafe-actions"
import { AppState } from "../../../redux"
import actions, { NewWordAction } from "./actions"

export type NewWordState = {
  isLoading: boolean
  status: "success" | "error" | null,
}
export const initialState: NewWordState = {
  isLoading: false,
  status: null,
}

const reducer = (
  state: NewWordState = initialState,
  action: NewWordAction,
): NewWordState => {
  switch (action.type) {
    case getType(actions.addWord.request):
      return { ...state, isLoading: true, status: null }

    case getType(actions.addWord.success):
      return { ...state, isLoading: false, status: "success" }

    case getType(actions.addWord.failure):
      return { ...state, isLoading: false, status: "error" }

    case getType(actions.done):
      return { ...state, isLoading: false, status: null }

    default:
      return state
  }
}

export const selectors = {
  getIsLoading: (state: AppState) => state.newWord.isLoading,
  getIsAddSuccess: (state: AppState) => state.newWord.status === "success",
}

export default reducer
