/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { Check as CheckIcon } from "react-feather"

import styled from "../../../theme"
import useClickOutside from "../../hooks/useClickOutside"

import Box from "../../Box"
import SpeechBubble from "../../SpeechBubble"
import ActionButton from "./ActionButton"

type Props = {
  onClose: () => void
  onConfirm: () => void
  message: string
  actionButtonRef: React.RefObject<HTMLElement>,
}

const ConfirmationContainer = styled.div({
  position: "absolute",
  right: 0,
  top: "100%",
  zIndex: 1,
})

const ConfirmationModal: React.FunctionComponent<Props> = ({
  message,
  onClose,
  onConfirm,
  actionButtonRef: { current: actionElement },
}) => {
  const handleConfirm = () => {
    onClose()
    onConfirm()
  }
  const clickOutsideRef = useClickOutside(
    onClose,
    actionElement ? [actionElement] : [],
  )

  return (
    <ConfirmationContainer ref={clickOutsideRef}>
      <SpeechBubble position="top" pointer="left" align="end">
        <Box>{message}</Box>
        <ActionButton onClick={handleConfirm} icon={CheckIcon} />
      </SpeechBubble>
    </ConfirmationContainer>
  )
}

export default ConfirmationModal
