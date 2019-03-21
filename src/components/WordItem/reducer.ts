import { ActionType, createStandardAction, getType } from "typesafe-actions"

const toggleRemoveConfirmation = createStandardAction(
  "TOGGLE_REMOVE_CONFIRMATION",
)()
const toggleCancelEditConfirmation = createStandardAction(
  "TOGGLE_CANCEL_EDIT_CONFIRMATION",
)()

type Action = ActionType<
  typeof toggleRemoveConfirmation | typeof toggleCancelEditConfirmation
>

type ActionsState = {
  isRemoveConfirmationOpen: boolean
  isCancelEditConfirmationOpen: boolean,
}

const reducer = (state: ActionsState, action: Action): ActionsState => {
  switch (action.type) {
    case getType(toggleRemoveConfirmation): {
      const isRemoveConfirmationOpen = !state.isRemoveConfirmationOpen
      return {
        ...state,
        isRemoveConfirmationOpen,
        isCancelEditConfirmationOpen: isRemoveConfirmationOpen
          ? false
          : state.isCancelEditConfirmationOpen,
      }
    }
    case getType(toggleCancelEditConfirmation): {
      const isCancelEditConfirmationOpen = !state.isCancelEditConfirmationOpen
      return {
        ...state,
        isCancelEditConfirmationOpen,
        isRemoveConfirmationOpen: isCancelEditConfirmationOpen
          ? false
          : state.isRemoveConfirmationOpen,
      }
    }
    default:
      return state
  }
}

export { toggleRemoveConfirmation, toggleCancelEditConfirmation }
export default reducer
