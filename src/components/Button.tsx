import styled from "../theme"
import media from "../theme/media"
import Box, { BoxProps } from "./Box"

type Props = {
  icon?: boolean
  size?: "small" | "normal" | "large"
  variant?: "primary" | "secondary",
} & BoxProps

const Button = styled(Box)<Props>(
  ({
    icon,
    size = "normal",
    theme: {
      space,
      colors: { button },
      borderRadius,
      transitions,
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
    ":hover:enabled": {
      backgroundColor: button[variant].hover,
    },
    ":disabled": {
      opacity: 0.6,
      cursor: "default",
    },
    // font
    fontSize: size === "small" ? 16 : 20,
    letterSpacing: 2,
    fontFamily: "inherit",
    // space
    padding: icon
      ? 6
      : size === "small"
      ? `3px ${space.xsmall}px`
      : `${space.xsmall}px ${space.small}px`,
    ...(icon && { display: "flex", alignSelf: "center" }),
    "& + &": {
      marginLeft: space.xsmall,
    },
  }),
)

Button.defaultProps = {
  variant: "primary",
}

export type ButtonProps = Props
export const InputButton = Button.withComponent("input")

export default Button.withComponent("button")
