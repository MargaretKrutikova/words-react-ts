import { ActionType, createAction, createAsyncAction } from "typesafe-actions"
import { WordEntity } from "../../domains/words/model"

type WordPayload = { id: string }
type ErrorPayload = { error: string } & WordPayload

const updateWord = createAsyncAction(
  "word/UPDATE",
  "word/UPDATE_SUCCESS",
  "word/UPDATE_ERROR",
)<WordEntity, WordEntity, ErrorPayload>()

const deleteWord = createAsyncAction(
  "word/DELETE",
  "word/DELETE_SUCCESS",
  "word/DELETE_ERROR",
)<WordPayload, WordPayload, ErrorPayload>()

const cancelEditing = createAction(
  "word/CANCEL_EDIT",
  (resolve) => (id: string) => resolve({ id }),
)

const startEditing = createAction("word/START_EDIT", (resolve) => (id: string) =>
  resolve({ id }),
)

const resetStatus = createAction("word/RESET_STATUS", (resolve) => (id: string) =>
  resolve({ id }),
)

const actions = {
  updateWord,
  cancelEditing,
  startEditing,
  deleteWord,
  resetStatus,
}

export type WordDraftsAction = ActionType<typeof actions>
export default actions
