import styled, { AsProps, transitions } from "../theme"
import Box, { BoxProps } from "./Box"

type Props = AsProps & BoxProps

const Button = styled(Box)<Props>(
  ({
    theme: {
      space,
      colors: { button },
    },
  }) => ({
    // reset
    outline: "none",
    border: "none",
    cursor: "pointer",
    // style
    color: button.primary.text,
    backgroundColor: button.primary.bg,
    borderRadius: 3,
    transition: transitions[0],
    ":hover": {
      backgroundColor: button.primary.hover,
    },
    // font
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: "inherit",
    // space
    padding: `${space.xsmall}px ${space.medium}px`,
  }),
)

Button.defaultProps = {
  as: "button",
}

export const InputButton = Button.withComponent("input")

export default Button
