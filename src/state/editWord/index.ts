import actions, { EditWordAction } from "./actions"
export { getNewWordEditState, getWordEditState } from "./reducer"
import reducer, {
  EditStatus,
  initialState,
  WordsUnderEdit,
  WordUnderEdit,
} from "./reducer"

export {
  actions as editWordActions,
  reducer as editWordReducer,
  initialState as editWordInitState,
}

export type EditStatus = EditStatus
export type EditWordAction = EditWordAction
export type WordsUnderEdit = WordsUnderEdit
export type WordUnderEdit = WordUnderEdit
