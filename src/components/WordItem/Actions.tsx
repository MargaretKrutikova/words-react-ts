/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { Edit2 as EditIcon, Trash2 as RemoveIcon } from "react-feather"

import ConfirmationButton from "../../common/Confirmation/ConfirmationButton"
import IconButton from "../../common/IconButton"
import Loader from "../../common/Loader"
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
  alignItems: "center",
  marginLeft: theme.space.small,
}))

const Actions: React.FunctionComponent<Props> = React.memo(
  ({ isLoading, onStartEdit, onRemove }) => {
    const [isConfirmationOpen, toggleConfirmationOpen] = useToggle(false)
    console.log(isConfirmationOpen)
    return (
      <ActionContainer>
        <IconButton
          icon={EditIcon}
          onClick={onStartEdit}
          disabled={isLoading}
        />

        <ConfirmationButton
          icon={isLoading ? Loader : RemoveIcon}
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
