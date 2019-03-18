/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import {
  Edit2 as EditIcon,
  Save as SaveIcon,
  Trash2 as RemoveIcon,
  X as CancelIcon,
} from "react-feather"

import styled from "../../../theme"
import ActionButton from "./ActionButton"
import ActionConfirmation from "./ActionConfirmationButton"
import reducer, {
  toggleCancelEditConfirmation,
  toggleRemoveConfirmation,
} from "./reducer"

type Props = {
  isLoading: boolean
  isEditing: boolean
  canSave: boolean
  onStartEdit: () => void
  onCancelEdit: () => void
  onRemove: () => void
  onSave: () => void,
}

const ActionContainer = styled.div((props) => ({
  position: "absolute",
  display: "flex",
  justifyContent: "flex-end",
  right: 0,
  top: props.theme.space.xsmall,
}))

const Actions: React.FunctionComponent<Props> = React.memo(
  ({
    isLoading,
    isEditing,
    canSave,
    onStartEdit,
    onCancelEdit,
    onRemove,
    onSave,
  }) => {
    const [state, dispatch] = React.useReducer(reducer, {
      isCancelEditConfirmationOpen: false,
      isRemoveConfirmationOpen: false,
    })

    const onToggleRemoveConfirmation = () =>
      dispatch(toggleRemoveConfirmation())

    const onToggleCancelEditConfirmation = () =>
      dispatch(toggleCancelEditConfirmation())

    return (
      <ActionContainer>
        {isEditing ? (
          <React.Fragment>
            <ActionButton
              icon={SaveIcon}
              onClick={onSave}
              disabled={isLoading || !canSave}
            />

            <ActionConfirmation
              icon={CancelIcon}
              disabled={isLoading}
              onConfirm={onCancelEdit}
              message="Cancel edit?"
              isConfirmationOpen={state.isCancelEditConfirmationOpen}
              onToggleConfirmation={onToggleCancelEditConfirmation}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <ActionButton
              icon={EditIcon}
              onClick={onStartEdit}
              disabled={isLoading}
            />

            <ActionConfirmation
              icon={RemoveIcon}
              disabled={isLoading}
              onConfirm={onRemove}
              message="Remove word?"
              isConfirmationOpen={state.isRemoveConfirmationOpen}
              onToggleConfirmation={onToggleRemoveConfirmation}
            />
          </React.Fragment>
        )}
      </ActionContainer>
    )
  },
)

export default Actions
