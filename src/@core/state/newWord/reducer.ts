import { getType } from "typesafe-actions"
import { AppState } from "../../../redux"
import actions, { NewWordAction } from "./actions"

export type NewWordState = {
  isLoading: boolean
  status: "success" | "error" | null
  isEditDialogOpen: boolean,
}
export const initialState: NewWordState = {
  isLoading: false,
  isEditDialogOpen: false,
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
      return {
        ...state,
        isLoading: false,
        isEditDialogOpen: false,
        status: "success",
      }

    case getType(actions.addWord.failure):
      return { ...state, isLoading: false, status: "error" }

    case getType(actions.toggleEditDialogOpen):
      return { ...state, isEditDialogOpen: !state.isEditDialogOpen }

    default:
      return state
  }
}

export const selectors = {
  getIsLoading: (state: AppState) => state.newWord.isLoading,
  getIsAddSuccess: (state: AppState) => state.newWord.status === "success",
  getIsEditDialogOpen: (state: AppState) => state.newWord.isEditDialogOpen,
}

export default reducer
