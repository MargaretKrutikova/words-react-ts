import * as React from "react"
import Flex from "../Flex"
import { RouterLink } from "../Link"

const Navigation: React.FunctionComponent<{}> = () => (
  <Flex>
    <RouterLink to="/" mr={3}>
      Home
    </RouterLink>
    <RouterLink to="/list/page" mr={3}>
      List
    </RouterLink>
    <RouterLink to="/">Add</RouterLink>
  </Flex>
)

export default Navigation
