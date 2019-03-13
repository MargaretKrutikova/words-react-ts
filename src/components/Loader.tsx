/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import * as React from "react"
import { Loader as LoaderIcon, Props } from "react-feather"

const rotate = keyframes`
100%{
  transform:rotate(360deg);
}
`

const Loader: React.FunctionComponent<Props> = (props) => (
  <LoaderIcon
    css={{
      animation: `${rotate} 3s linear infinite`,
    }}
    {...props}
  />
)

export default Loader
