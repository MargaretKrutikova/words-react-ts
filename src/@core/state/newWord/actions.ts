import { createAction, createAsyncAction } from "typesafe-actions"
import { ActionType } from "typesafe-actions/dist/type-helpers"
import { AddWordEntity, WordEntity } from "../../api/"

const addWord = createAsyncAction(
  "newWord/ADD",
  "newWord/ADD_SUCCESS",
  "newWord/ADD_ERROR",
)<AddWordEntity, WordEntity, string>()

const toggleEditDialogOpen = createAction("newWord/TOGGLE_EDIT_DIALOG_OPEN")

const actions = { addWord, toggleEditDialogOpen }

export type NewWordAction = ActionType<typeof actions>

export default actions
