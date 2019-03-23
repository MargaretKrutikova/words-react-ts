/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { Edit2 as EditIcon, Trash2 as RemoveIcon } from "react-feather"

import ConfirmationButton from "../../common/Confirmation/ConfirmationButton"
import IconButton from "../../common/IconButton"
import styled from "../../theme"

type Props = {
  isLoading: boolean
  onStartEdit: () => void
  onCancelEdit: () => void
  onRemove: () => void,
}

const ActionContainer = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  position: "relative",
  alignSelf: "flex-start",
  marginLeft: theme.space.small,
}))

const Actions: React.FunctionComponent<Props> = React.memo(
  ({ isLoading, onStartEdit, onRemove }) => {
    const [
      isRemoveConfirmationOpen,
      setIsRemoveConfirmationOpen,
    ] = React.useState(false)

    const onToggleRemoveConfirmation = () =>
      setIsRemoveConfirmationOpen((prevIsOpen) => !prevIsOpen)

    return (
      <ActionContainer>
        <IconButton
          icon={EditIcon}
          onClick={onStartEdit}
          disabled={isLoading}
        />

        <ConfirmationButton
          icon={RemoveIcon}
          disabled={isLoading}
          onConfirm={onRemove}
          isConfirmationOpen={isRemoveConfirmationOpen}
          onToggleConfirmation={onToggleRemoveConfirmation}
        >
          Remove word?
        </ConfirmationButton>
      </ActionContainer>
    )
  },
)

export default Actions
