/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import Flex, { FlexProps } from "./Flex"

type Props = FlexProps

const InnerContainer: React.FunctionComponent<Props> = (props) => (
  <Flex width={{ xs: 1, md: 550 }} {...props} />
)

export default InnerContainer
