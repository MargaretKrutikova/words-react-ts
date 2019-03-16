import { Link as ReactRouterLink } from "react-router-dom"
import styled, { AsProps } from "../theme"
import Box, { BoxProps } from "./Box"

type Props = AsProps & BoxProps

const Link = styled(Box)<Props>({
  textDecoration: "none",
  color: "inherit",
})

Link.defaultProps = {
  as: "a",
}

export const RouterLink = Link.withComponent(ReactRouterLink)
export const ButtonLink = Link.withComponent("button")

export default Link
