import * as React from "react"
import {
  Check as CheckIcon,
  Edit2 as EditIcon,
  Trash2 as RemoveIcon,
  X as CancelIcon,
} from "react-feather"

import styled from "../../theme"
import ActionButton from "./ActionButton"

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
  }) => (
    <ActionContainer>
      {isEditing ? (
        <React.Fragment>
          <ActionButton onClick={onSave} disabled={isLoading || !canSave}>
            <CheckIcon size={20} />
          </ActionButton>
          <ActionButton onClick={onCancelEdit} disabled={isLoading}>
            <CancelIcon size={20} />
          </ActionButton>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <ActionButton onClick={onStartEdit} disabled={isLoading}>
            <EditIcon size={20} />
          </ActionButton>
          <ActionButton onClick={onRemove} disabled={isLoading}>
            <RemoveIcon size={20} />
          </ActionButton>
        </React.Fragment>
      )}
    </ActionContainer>
  ),
)

export default Actions
