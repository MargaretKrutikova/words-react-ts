/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import styled from "../theme"

const Overlay = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  zIndex: 1,
  backgroundColor: "rgba(0,0,0,0.15)",
})

const SimpleModal: React.FunctionComponent<{}> = ({ children }) => (
  <React.Fragment>
    <Overlay />
    {children}
  </React.Fragment>
)

export default SimpleModal
