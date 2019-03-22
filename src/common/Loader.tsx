/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import * as React from "react"
import { Loader as LoaderIcon, Props } from "react-feather"
import useElapsed from "../hooks/useElapsed"

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

const TRANSITION_MS = 3000
const SHOW_DELAY_MS = 50

const LazyLoader: React.FunctionComponent<Props> = (props) => {
  const elapsed = useElapsed(SHOW_DELAY_MS)

  return (
    <Loader
      {...props}
      css={{
        opacity: elapsed ? 1 : 0,
        transition: `opacity ${TRANSITION_MS}ms ease`,
      }}
    />
  )
}

export { LazyLoader }
export default Loader
