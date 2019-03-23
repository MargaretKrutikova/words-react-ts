/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import Flex from "../../common/Flex"
import { RouterLink } from "../../common/Link"

const Navigation: React.FunctionComponent<{}> = () => (
  <Flex as="nav">
    <RouterLink to="/" mr="small">
      Home
    </RouterLink>
    <RouterLink to="/list/page" mr="small">
      List
    </RouterLink>
  </Flex>
)

export default Navigation
