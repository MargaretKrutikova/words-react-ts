import { NewWordAction } from "./actions"

export type NewWordStatus = "IDLE" | "ADDING" | "ADDED" | "ERROR"
export type NewWordState = {
  status: NewWordStatus,
}
export const initialState: NewWordState = {
  status: "IDLE",
}

type NewWordStatusMachine = {
  [k in NewWordStatus]: { [a in NewWordAction["type"]]?: NewWordStatus }
}
const newWordStatusMachine: NewWordStatusMachine = {
  IDLE: {
    "newWord/ADD": "ADDING",
  },
  ADDING: {
    "newWord/ADD_ERROR": "ERROR",
    "newWord/ADD_SUCCESS": "ADDED",
  },
  ADDED: {
    "newWord/RESET_STATUS": "IDLE",
  },
  ERROR: {
    "newWord/RESET_STATUS": "IDLE",
  },
}

const reducer = (
  state: NewWordState = initialState,
  action: NewWordAction,
): NewWordState => {
  const statusActionMap = newWordStatusMachine[state.status]
  const status = !!statusActionMap ? statusActionMap[action.type] : state.status

  return !status || status === state.status ? state : { ...state, status }
}

export default reducer
