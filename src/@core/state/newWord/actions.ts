import { ActionType, createAction, createAsyncAction } from "typesafe-actions"
import { AddWordEntity, WordEntity } from "../../api/"

const addWord = createAsyncAction(
  "newWord/ADD",
  "newWord/ADD_SUCCESS",
  "newWord/ADD_ERROR",
)<AddWordEntity, WordEntity, string>()

const resetStatus = createAction("newWord/RESET_STATUS")

export type NewWordAction = ActionType<typeof addWord | typeof resetStatus>

export default { addWord, resetStatus }
