/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Omit } from "emotion-theming/types/helper"
import * as React from "react"
import Button, { ButtonProps } from "./Button"
import SvgIcon, { Props as SvgIconProps } from "./SvgIcon"

type Props = SvgIconProps &
  Partial<Omit<ButtonProps, "icon">> &
  Omit<React.HTMLProps<HTMLButtonElement>, "color" | "width" | "size">

const IconButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ icon, size, ...rest }, ref) => (
    <Button ref={ref} icon={true} variant="secondary" {...rest}>
      <SvgIcon icon={icon} size={size} />
    </Button>
  ),
)
export default IconButton
