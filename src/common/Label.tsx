/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import styled from "../theme"
import Typography from "./Typography"

export type Props = {
  text?: string,
} & React.HTMLProps<HTMLLabelElement>

const StyledLabel = styled.label(({ theme: { space } }) => ({
  marginBottom: (space.unit * 3) / 2,
  display: "block",
}))

const Label: React.FunctionComponent<Props> = ({ text, children, ...rest }) => (
  <StyledLabel {...rest}>
    <Typography>{text}</Typography>
    {children}
  </StyledLabel>
)

export default Label
