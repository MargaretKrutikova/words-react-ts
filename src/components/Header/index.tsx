/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import Container from "../Container"
import { RouterLink } from "../Link"
import Typography from "../Typography"
import Navigation from "./Navigation"

const Header: React.FunctionComponent<{}> = () => (
  <Container
    flexContainer={true}
    py={{ xs: "xsmall", md: "small" }}
    bg="primary"
    as="header"
    alignItems="baseline"
    justifyContent={{ xs: "space-between", sm: "flex-start" }}
  >
    <Typography as="h1" mr="large" variant="h2">
      <RouterLink to="/">Words</RouterLink>
    </Typography>

    <Navigation />
  </Container>
)

export default Header
