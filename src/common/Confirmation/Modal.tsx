/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"

import useClickOutside from "../../hooks/useClickOutside"
import styled from "../../theme"

import Box from "../Box"
import Button from "../Button"
import SpeechBubble from "../SpeechBubble"

type Props = {
  onClose: () => void
  onConfirm: () => void
  buttonRef: React.RefObject<HTMLElement>,
}

const Container = styled.div({
  position: "absolute",
  right: 0,
  top: "100%",
  zIndex: 1,
})

const Modal: React.FunctionComponent<Props> = ({
  children,
  onClose,
  onConfirm,
  buttonRef: { current: buttonElement },
}) => {
  const clickOutsideRef = useClickOutside(
    onClose,
    buttonElement ? [buttonElement] : [],
  )

  return (
    <Container ref={clickOutsideRef}>
      <SpeechBubble
        position="top"
        pointer="left"
        align="end"
        alignItems="center"
      >
        <Box mr="xsmall">{children}</Box>
        <Button size="small" variant="secondary" onClick={onConfirm}>
          Ok
        </Button>
      </SpeechBubble>
    </Container>
  )
}

export default Modal
