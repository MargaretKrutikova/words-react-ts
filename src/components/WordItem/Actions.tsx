/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { Edit2 as EditIcon, Trash2 as RemoveIcon } from "react-feather"

import ConfirmationButton from "../../common/Confirmation/ConfirmationButton"
import IconButton from "../../common/IconButton"
import useToggle from "../../hooks/useToggle"
import styled from "../../theme"

type Props = {
  isLoading: boolean
  onStartEdit: () => void
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
    const [isConfirmationOpen, toggleConfirmationOpen] = useToggle(false)

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
          isConfirmationOpen={isConfirmationOpen}
          onToggleConfirmation={toggleConfirmationOpen}
        >
          Remove word?
        </ConfirmationButton>
      </ActionContainer>
    )
  },
)

export default Actions
