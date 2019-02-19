import reducer, {
  actions,
  EditStatus,
  EditWordAction,
  EditWordState,
  initialState,
} from "./reducer"

export {
  actions as editWordActions,
  reducer as editWordReducer,
  initialState as editWordInitState,
}

export type EditStatus = EditStatus
export type EditWordAction = EditWordAction
export type EditWordState = EditWordState
