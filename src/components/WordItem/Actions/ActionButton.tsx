/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Omit } from "emotion-theming/types/helper"
import * as React from "react"
import { Icon } from "react-feather"
import Button, { ButtonProps } from "../../Button"
import SvgIcon from "../../SvgIcon"

type Props = {
  icon: Icon,
} & Partial<Omit<ButtonProps, "icon">> &
  Omit<React.HTMLProps<HTMLButtonElement>, "color" | "width">

const ActionButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ icon, ...rest }, ref) => (
    <Button ref={ref} icon={true} variant="secondary" {...rest}>
      <SvgIcon icon={icon} />
    </Button>
  ),
)
export default ActionButton
