/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import styled from "../theme"
import media from "../theme/media"

type Props = {} & React.InputHTMLAttributes<HTMLInputElement>

const getInputShadow = (color: string, focused: boolean = false) =>
  !focused ? `0 0 0 1px ${color}` : `0 0 0 2px ${color}`

const StyledInput = styled.input<Props>(
  ({ theme: { colors, borderRadius, space, transitions } }) => ({
    // reset
    border: "none",
    outline: "none",
    // style
    color: colors.text1,
    backgroundColor: colors.input.bg,
    borderRadius,
    transition: transitions[0],
    boxShadow: getInputShadow(colors.input.border),
    ":focus": {
      boxShadow: getInputShadow(colors.input.border, true),
    },
    // font
    fontFamily: "inherit",
    fontSize: 22,
    letterSpacing: 2,
    display: "block",
    // space
    boxSizing: "border-box",
    width: "100%",
    padding: `${space.xxsmall}px ${space.xsmall}px`,
    WebkitAppearance: "none",
    [media.down("sm")]: {
      fontSize: 18,
      letterSpacing: 1,
    },
  }),
)

const Input: React.FunctionComponent<Props> = (props) => (
  <StyledInput {...props} />
)

export default Input
