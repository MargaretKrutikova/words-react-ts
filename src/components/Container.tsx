/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import Box from "./Box"
import Flex, { FlexProps } from "./Flex"

type Props = {
  flexContainer?: true,
} & FlexProps

const Container: React.FunctionComponent<Props> = ({
  flexContainer,
  ...rest
}) => {
  const Component = flexContainer ? Flex : Box
  return <Component px={{ xs: "small", sm: "medium", md: 150 }} {...rest} />
}

export default Container
