/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Omit } from "emotion-theming/types/helper"
import * as React from "react"
import { Icon, Props as IconProps } from "react-feather"

export type Props = {
  icon: Icon
  size?: "small" | "normal" | "large",
} & Omit<IconProps, keyof "size">

const SvgIcon: React.FunctionComponent<Props> = ({
  icon: IconComponent,
  size = "normal",
  ...rest
}) => (
  <IconComponent
    size={size === "small" ? 16 : size === "large" ? 24 : 20}
    css={{
      display: "block",
    }}
    {...rest}
  />
)

export default SvgIcon
