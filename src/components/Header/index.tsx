import * as React from "react"
import Flex from "../Flex"
import { RouterLink } from "../Link"
import Typography from "../Typography"
import Navigation from "./Navigation"

const Header: React.FunctionComponent<{}> = () => (
  <Flex
    px={{ xs: 4, md: 6 }}
    py={{ xs: 2, md: 3 }}
    bg="purple"
    as="header"
    alignItems="center"
    justifyContent={{ xs: "space-between", sm: "flex-start" }}
  >
    <Typography as="h1" mr={5} variant="h1">
      <RouterLink to="/">Words</RouterLink>
    </Typography>

    <Navigation />
  </Flex>
)

export default Header
