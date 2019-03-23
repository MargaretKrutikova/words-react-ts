/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { createPortal } from "react-dom"
import { X as CloseIcon } from "react-feather"

import useClickOutside from "../hooks/useClickOutside"
import styled from "../theme"

import media from "../theme/media"
import IconButton from "./IconButton"
import Overlay from "./Overlay"
import Typography from "./Typography"

type Props = {
  onClose: () => void
  title?: string,
}

const ModalHeader = styled.div<{ hasTitle: boolean }>(
  ({ theme: { space }, hasTitle }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: hasTitle ? "space-between" : "flex-end",
    padding: `${space.small}px 0`,
    [media.down("sm")]: {
      padding: `${space.xsmall}px 0`,
    },
  }),
)

const ModalBody = styled.div(({ theme }) => ({
  position: "relative",
  borderRadius: theme.space.xsmall,
  backgroundColor: theme.colors.background2,
  padding: `0 ${theme.space.smedium}px ${theme.space.smedium}px`,
  border: `2px ${theme.colors.border2} solid`,
  whiteSpace: "nowrap",
  width: 400,
  [media.down("sm")]: {
    width: "100vw",
    margin: theme.space.xsmall,
    padding: `0 ${theme.space.small}px ${theme.space.small}px`,
  },
}))

const ModalOverlay = styled(Overlay)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

const Modal: React.FunctionComponent<Props> = ({
  children,
  onClose,
  title,
}) => {
  const clickOutsideRef = useClickOutside(onClose)

  return createPortal(
    <ModalOverlay>
      <ModalBody ref={clickOutsideRef}>
        <ModalHeader hasTitle={!!title}>
          {title && <Typography variant="h4">{title}</Typography>}
          <IconButton icon={CloseIcon} onClick={onClose} />
        </ModalHeader>
        {children}
      </ModalBody>
    </ModalOverlay>,
    document.body,
  )
}

export default Modal
