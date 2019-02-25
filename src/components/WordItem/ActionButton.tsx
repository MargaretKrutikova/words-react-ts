/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Omit } from "emotion-theming/types/helper"
import * as React from "react"
import Button, { ButtonProps } from "../Button"

type Props = ButtonProps &
  Omit<React.HTMLProps<HTMLButtonElement>, "color" | "width">

const ActionButton: React.FunctionComponent<Props> = ({
  children,
  ...rest
}) => (
  <Button icon={true} variant="secondary" {...rest}>
    {children}
  </Button>
)
export default ActionButton
