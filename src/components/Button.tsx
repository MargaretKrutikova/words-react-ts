import styled, { AsProps, transitions } from "../theme"
import Box, { BoxProps } from "./Box"

type Props = {
  icon?: boolean,
} & AsProps &
  BoxProps

const Button = styled(Box)<Props>(
  ({
    icon,
    theme: {
      space,
      colors: { button },
      borderRadius,
    },
  }) => ({
    // reset
    outline: "none",
    border: "none",
    cursor: "pointer",
    // style
    color: button.primary.text,
    backgroundColor: button.primary.bg,
    borderRadius: icon ? "50%" : borderRadius,
    transition: transitions[0],
    ":hover": {
      backgroundColor: button.primary.hover,
    },
    // font
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: "inherit",
    // space
    padding: icon ? 3 : `${space.xsmall}px ${space.medium}px`,
    ...(icon && { display: "flex", alignSelf: "center" }),
  }),
)

Button.defaultProps = {
  as: "button",
}

export const InputButton = Button.withComponent("input")

export default Button
