import { ActionType, createAction, createAsyncAction } from "typesafe-actions"
import { AddWordEntity } from "../../domains/words"
import { WordEntity } from "../../domains/words/model"

const addWord = createAsyncAction(
  "newWord/ADD",
  "newWord/ADD_SUCCESS",
  "newWord/ADD_ERROR",
)<AddWordEntity, WordEntity, string>()

const resetStatus = createAction("newWord/RESET_STATUS")

export type NewWordAction = ActionType<typeof addWord | typeof resetStatus>

export default { addWord, resetStatus }
