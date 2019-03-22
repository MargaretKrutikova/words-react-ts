/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import {
  Edit2 as EditIcon,
  Save as SaveIcon,
  Trash2 as RemoveIcon,
  X as CancelIcon,
} from "react-feather"

import reducer, {
  toggleCancelEditConfirmation,
  toggleRemoveConfirmation,
} from "../../@core/state/wordActions"
import ConfirmationButton from "../../common/Confirmation/ConfirmationButton"
import IconButton from "../../common/IconButton"
import styled from "../../theme"

type Props = {
  isLoading: boolean
  isEditing: boolean
  canSave: boolean
  onStartEdit: () => void
  onCancelEdit: () => void
  onRemove: () => void
  onSave: () => void,
}

const ActionContainer = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  position: "relative",
  alignSelf: "flex-start",
  marginLeft: theme.space.small,
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
            <IconButton
              icon={SaveIcon}
              onClick={onSave}
              disabled={isLoading || !canSave}
            />

            <ConfirmationButton
              icon={CancelIcon}
              disabled={isLoading}
              onConfirm={onCancelEdit}
              isConfirmationOpen={state.isCancelEditConfirmationOpen}
              onToggleConfirmation={onToggleCancelEditConfirmation}
            >
              Cancel edit?
            </ConfirmationButton>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <IconButton
              icon={EditIcon}
              onClick={onStartEdit}
              disabled={isLoading}
            />

            <ConfirmationButton
              icon={RemoveIcon}
              disabled={isLoading}
              onConfirm={onRemove}
              isConfirmationOpen={state.isRemoveConfirmationOpen}
              onToggleConfirmation={onToggleRemoveConfirmation}
            >
              Remove word?
            </ConfirmationButton>
          </React.Fragment>
        )}
      </ActionContainer>
    )
  },
)

export default Actions
