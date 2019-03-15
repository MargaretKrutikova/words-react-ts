/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import {
  Check as CheckIcon,
  Edit2 as EditIcon,
  Save as SaveIcon,
  Trash2 as RemoveIcon,
  X as CancelIcon,
} from "react-feather"

import styled from "../../theme"
import Box from "../Box"
import useClickOutside from "../hooks/useClickOutside"
import SpeechBubble from "../SpeechBubble"
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

const ConfirmationModal = styled.div(() => ({
  position: "absolute",
  right: 0,
  top: "100%",
  zIndex: 1,
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
    const [isConfirmationOpen, setConfirmationOpen] = React.useState(false)
    const closeConfirmation = React.useCallback(() => {
      setConfirmationOpen(false)
    }, [setConfirmationOpen])

    const toggleConfirmationOpen = () => setConfirmationOpen((open) => !open)
    const clickOutsideRef = useClickOutside(closeConfirmation)

    return (
      <ActionContainer>
        {isEditing ? (
          <React.Fragment>
            <ActionButton onClick={onSave} disabled={isLoading || !canSave}>
              <SaveIcon size={20} />
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

            <Box css={{ position: "relative", justifyContent: "center" }}>
              <ActionButton
                onClick={toggleConfirmationOpen}
                disabled={isLoading}
              >
                <RemoveIcon size={20} />
              </ActionButton>
              {isConfirmationOpen && (
                <ConfirmationModal ref={clickOutsideRef}>
                  <SpeechBubble
                    position="top"
                    pointer="left"
                    align="end"
                    justifyContent="center"
                  >
                    <Box>Are you sure?</Box>
                    <ActionButton onClick={onRemove}>
                      <CheckIcon size={20} />
                    </ActionButton>
                  </SpeechBubble>
                </ConfirmationModal>
              )}
            </Box>
          </React.Fragment>
        )}
      </ActionContainer>
    )
  },
)

export default Actions
