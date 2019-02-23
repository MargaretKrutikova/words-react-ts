import { ActionType, createAction, createAsyncAction } from "typesafe-actions"
import { AddWordEntity } from "../../domains/words"
import { WordEntity } from "../../domains/words/model"

type UpdateWordErrorPayload = { error: string; id: string }

const updateWord = createAsyncAction(
  "@@editWord/SAVE",
  "@@editWord/SAVE_SUCCESS",
  "@@editWord/SAVE_ERROR",
)<WordEntity, WordEntity, UpdateWordErrorPayload>()

const addWord = createAsyncAction(
  "@@editWord/ADD",
  "@@editWord/ADD_SUCCESS",
  "@@editWord/ADD_ERROR",
)<AddWordEntity, WordEntity, string>()

const doneEditing = createAction(
  "@@editWord/DONE_EDIT",
  (resolve) => (id: string) => resolve({ id }),
)

const startEditing = createAction(
  "@@editWord/START_EDIT",
  (resolve) => (id: string) => resolve({ id }),
)
const resetAdding = createAction("@@editWord/RESET_ADD")

const actions = {
  updateWord,
  doneEditing,
  startEditing,
  addWord,
  resetAdding,
}

export type EditWordAction = ActionType<typeof actions>
export default actions
