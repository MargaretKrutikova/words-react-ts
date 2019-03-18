/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { Icon } from "react-feather"

import ActionButton from "./ActionButton"
import ConfirmationModal from "./ConfirmationModal"

type Props = {
  onToggleConfirmation: () => void
  onConfirm: () => void
  message: string
  icon: Icon
  disabled?: boolean
  isConfirmationOpen: boolean,
}

const ActionConfirmation: React.FunctionComponent<Props> = ({
  message,
  onToggleConfirmation,
  onConfirm,
  disabled,
  isConfirmationOpen,
  icon,
}) => {
  const actionButtonRef = React.useRef<HTMLButtonElement>(null)
  const handleConfirm = () => {
    onToggleConfirmation()
    onConfirm()
  }

  return (
    <React.Fragment>
      <ActionButton
        ref={actionButtonRef}
        icon={icon}
        onClick={onToggleConfirmation}
        disabled={disabled}
      />

      {isConfirmationOpen && (
        <ConfirmationModal
          actionButtonRef={actionButtonRef}
          message={message}
          onConfirm={handleConfirm}
          onClose={onToggleConfirmation}
        />
      )}
    </React.Fragment>
  )
}

export default ActionConfirmation
