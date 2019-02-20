import { ActionType, createAction, createAsyncAction } from "typesafe-actions"
import { WordEntity } from "../../domains/words/model"

type WordActionPayload = {
  id?: string,
}

type SaveWordPayload = {
  word: WordEntity,
} & WordActionPayload

type SaveWordErrorPayload = { error: string } & WordActionPayload

const saveWord = createAsyncAction(
  "@@editWord/SAVE",
  "@@editWord/SAVE_SUCCESS",
  "@@editWord/SAVE_ERROR",
)<SaveWordPayload, SaveWordPayload, SaveWordErrorPayload>()

const resetStatus = createAction("@@editWord/RESET", (resolve) => (id?: string) =>
  resolve({ id }),
)

const actions = { saveWord, resetStatus }

export type EditWordAction = ActionType<typeof actions>
export default actions
