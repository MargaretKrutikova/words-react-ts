/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Omit } from "emotion-theming/types/helper"
import * as React from "react"
import { Icon } from "react-feather"
import Button, { ButtonProps } from "../Button"

type Props = {
  icon: Icon,
} & Partial<Omit<ButtonProps, "icon">> &
  Omit<React.HTMLProps<HTMLButtonElement>, "color" | "width">

const ActionButton: React.FunctionComponent<Props> = ({
  icon: IconComponent,
  ...rest
}) => (
  <Button icon={true} variant="secondary" {...rest}>
    <IconComponent size={20} />
  </Button>
)
export default ActionButton
