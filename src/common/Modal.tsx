/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { createPortal } from "react-dom"

import useClickOutside from "../hooks/useClickOutside"
import styled from "../theme"

import media from "../theme/media"
import Overlay from "./Overlay"

type Props = {
  onClose: () => void,
}

const ModalBody = styled.div(({ theme }) => ({
  position: "relative",
  borderRadius: theme.space.xsmall,
  backgroundColor: theme.colors.background2,
  padding: theme.space.medium,
  border: `2px ${theme.colors.border2} solid`,
  whiteSpace: "nowrap",
  width: 500,
  [media.down("sm")]: {
    width: "100vw",
    margin: theme.space.xsmall,
    padding: theme.space.small,
  },
}))

const ModalOverlay = styled(Overlay)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

const Modal: React.FunctionComponent<Props> = ({ children, onClose }) => {
  const clickOutsideRef = useClickOutside(onClose)

  return createPortal(
    <ModalOverlay>
      <ModalBody ref={clickOutsideRef}>{children}</ModalBody>
    </ModalOverlay>,
    document.body,
  )
}

export default Modal
