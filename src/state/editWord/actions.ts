import {
  ActionType,
  createAction,
  createAsyncAction,
  createStandardAction,
} from "typesafe-actions"
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
const startAdding = createAction("@@editWord/START_ADD")

const actions = { updateWord, doneEditing, startEditing, addWord, startAdding }

export type EditWordAction = ActionType<typeof actions>
export default actions
