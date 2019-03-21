/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import styled from "../theme"

type Props = React.HTMLProps<HTMLInputElement>

const CHECKMARK_SIZE = 23

const Label = styled.label(({ theme: { space } }) => ({
  display: "block",
  position: "relative",
  lineHeight: "initial",
  paddingLeft: CHECKMARK_SIZE + space.xsmall,
  marginBottom: space.xsmall,
  cursor: "pointer",
  userSelect: "none",
}))

const Input = styled.input({
  position: "absolute",
  cursor: "pointer",
  opacity: 0,
  height: 0,
  width: 0,
})

type CheckmarkProps = {
  checked: boolean | undefined,
}
const Checkmark = styled.span<CheckmarkProps>(
  ({ checked, theme: { colors, transitions } }) => ({
    position: "absolute",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    left: 0,
    height: CHECKMARK_SIZE,
    width: CHECKMARK_SIZE,
    boxSizing: "border-box",
    backgroundColor: checked ? colors.primary : colors.radio.bg,
    border: `2px solid ${colors.primary}`,
    borderRadius: "50%",
    transition: transitions[0],
    ":hover": {
      backgroundColor: checked ? colors.primary : colors.radio.hover,
    },
  }),
)

const CheckmarkInner = styled.span<CheckmarkProps>(
  ({ checked, theme: { colors } }) => ({
    position: "absolute",
    display: checked ? "block" : "none",
    width: 9,
    height: 9,
    borderRadius: "50%",
    background: colors.radio.bg,
    ":hover": {
      backgroundColor: colors.radio.hover,
    },
  }),
)

const RadioButton: React.FunctionComponent<Props> = ({
  children,
  checked,
  ...rest
}) => (
  <Label>
    {children}
    <Input type="radio" checked={checked} {...rest} />
    <Checkmark checked={checked}>
      <CheckmarkInner checked={checked} />
    </Checkmark>
  </Label>
)

export default RadioButton
