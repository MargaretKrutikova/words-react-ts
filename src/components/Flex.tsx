/** @jsx jsx */
import { jsx } from "@emotion/core"
import {
  alignItems,
  AlignItemsProps,
  flexDirection,
  FlexDirectionProps,
  flexWrap,
  FlexWrapProps,
  justifyContent,
  JustifyContentProps,
} from "styled-system"
import styled, { AsProps } from "../theme"
import Box, { BoxProps } from "./Box"

type Props = FlexWrapProps &
  FlexDirectionProps &
  JustifyContentProps &
  AlignItemsProps &
  BoxProps &
  AsProps

const Flex = styled(Box)<Props>(
  {
    display: "flex",
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
)

export default Flex
