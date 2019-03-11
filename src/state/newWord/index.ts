import { default as newWordActions, NewWordAction } from "./actions"
import {
  default as newWordReducer,
  initialState as newWordInitState,
  NewWordState,
  NewWordStatus,
} from "./reducer"

export { newWordActions, newWordReducer, newWordInitState }
export type NewWordStatus = NewWordStatus
export type NewWordState = NewWordState
export type NewWordAction = NewWordAction
