import { default as newWordActions, NewWordAction } from "./actions"
import {
  default as newWordReducer,
  initialState as newWordInitState,
  NewWordState,
  selectors as newWordSelectors,
} from "./reducer"

export { newWordActions, newWordReducer, newWordSelectors, newWordInitState }
export type NewWordState = NewWordState
export type NewWordAction = NewWordAction
