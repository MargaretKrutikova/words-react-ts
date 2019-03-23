/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { Icon } from "react-feather"

import IconButton from "../IconButton"
import Modal from "./Modal"

type Props = {
  onToggleConfirmation: () => void
  onConfirm: () => void
  icon: Icon
  disabled?: boolean
  isConfirmationOpen: boolean,
}

const ConfirmationButton: React.FunctionComponent<Props> = ({
  onToggleConfirmation,
  onConfirm,
  disabled,
  isConfirmationOpen,
  children,
  icon,
}) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const handleConfirm = () => {
    onToggleConfirmation()
    onConfirm()
  }

  return (
    <React.Fragment>
      <IconButton
        ref={buttonRef}
        icon={icon}
        onClick={onToggleConfirmation}
        disabled={disabled}
      />

      {isConfirmationOpen && (
        <Modal
          buttonRef={buttonRef}
          onConfirm={handleConfirm}
          onClose={onToggleConfirmation}
        >
          {children}
        </Modal>
      )}
    </React.Fragment>
  )
}

export default ConfirmationButton
