import { css } from "@emotion/core"
import styled from "../theme"
import { hex2Rgba } from "../utils"
import Flex, { FlexProps } from "./Flex"

export type Position = "top" | "bottom" | "left" | "right"
export type Align = "start" | "center" | "end"
export type Pointer = "left" | "right"

type Props = {
  position: Position
  pointer: Pointer
  align: Align,
} & FlexProps

const getComplementaryPosition = (position: Position): Position =>
  position === "top" || position === "bottom" ? "left" : "top"

const oppositePosition = (position: Position): Position => {
  switch (position) {
    case "bottom":
      return "top"
    case "top":
      return "bottom"
    case "left":
      return "right"
    case "right":
      return "left"
    default:
      return "top"
  }
}

const capitilize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

const speechStyles = (
  position: Position,
  pointer: Pointer,
  align: Align,
  color: string,
  size: number,
  borderSize: number = 0,
) => {
  const complementary = getComplementaryPosition(position)
  const complementaryBorder =
    pointer === "left" ? oppositePosition(complementary) : complementary
  const opposite = oppositePosition(position)
  const alignPosition =
    align === "end" ? oppositePosition(complementary) : complementary

  return css({
    content: "''",
    position: "absolute",
    width: 0,
    height: 0,
    [position]: -size - borderSize,
    [alignPosition]: size - (align === "end" ? borderSize / 2 : 0),
    [`margin${capitilize(complementary)}`]: -borderSize / 2,
    border: `${size + borderSize}px solid transparent`,
    [`border${capitilize(opposite)}Color`]: color,
    [`border${capitilize(position)}`]: 0,
    [`border${capitilize(complementaryBorder)}`]: 0,
  })
}

const SpeechBubble = styled(Flex)<Props>(
  ({ theme, position, pointer, align }) => ({
    position: "relative",
    borderRadius: theme.space.xsmall,
    backgroundColor: theme.colors.background2,
    padding: theme.space.xsmall,
    border: `2px ${theme.colors.border2} solid`,
    whiteSpace: "nowrap",
    [`margin${capitilize(position)}`]: 20,
    filter: `drop-shadow(1px 3px 4px ${hex2Rgba(theme.colors.border2, 0.6)})`,
    ":after": {
      ...speechStyles(position, pointer, align, theme.colors.background2, 16),
    },
    ":before": {
      ...speechStyles(position, pointer, align, theme.colors.border2, 16, 4),
    },
  }),
)

export default SpeechBubble
