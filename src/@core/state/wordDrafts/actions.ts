import { ActionType, createAction, createAsyncAction } from "typesafe-actions"
import { WordEntity } from "../../api"

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

const done = createAction("word/DONE", (resolve) => (id: string) =>
  resolve({ id }),
)

const actions = { updateWord, deleteWord, done }

export type WordDraftsAction = ActionType<typeof actions>
export default actions
