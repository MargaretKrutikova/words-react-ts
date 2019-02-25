import { Omit } from "emotion-theming/types/helper"
import styled, { transitions } from "../theme"
import Box, { BoxProps } from "./Box"

type Props = {
  icon?: boolean
  variant?: "primary" | "secondary",
} & BoxProps

const Button = styled(Box)<Props>(
  ({
    icon,
    theme: {
      space,
      colors: { button },
      borderRadius,
    },
    variant = "primary",
  }) => ({
    // reset
    outline: "none",
    border: "none",
    cursor: "pointer",
    // style
    color: button[variant].text,
    backgroundColor: button[variant].bg,
    borderRadius: icon ? "50%" : borderRadius,
    transition: transitions[0],
    ":hover": {
      backgroundColor: button[variant].hover,
    },
    // font
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: "inherit",
    // space
    padding: icon ? 6 : `${space.xsmall}px ${space.medium}px`,
    ...(icon && { display: "flex", alignSelf: "center" }),
  }),
)

Button.defaultProps = {
  variant: "primary",
}

export type ButtonProps = Props
export const InputButton = Button.withComponent("input")

export default Button.withComponent("button")
