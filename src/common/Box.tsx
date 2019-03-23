import { Omit } from "emotion-theming/types/helper"
import {
  alignSelf,
  AlignSelfProps,
  flex,
  FlexProps,
  fontSize,
  FontSizeProps,
  order,
  OrderProps,
} from "styled-system"
import { space, width } from "styled-system-mapper"
import styled, {
  AsProps,
  ColorProps,
  omitProps,
  SpaceProps,
  Theme,
  WidthProps,
} from "../theme"

type AllProps = WidthProps &
  SpaceProps &
  FontSizeProps &
  FlexProps &
  OrderProps &
  AlignSelfProps &
  AsProps & {
    color?: ColorProps
    bg?: ColorProps,
  }

type Props = Partial<Omit<AllProps, "">>

const getColor = (theme: Theme, color: string) => (theme.colors as any)[color]

const Box = styled("div", omitProps<Props>("width", "color"))<Props>(
  (props) => ({
    boxSizing: "border-box",
    ...(props.color && { color: getColor(props.theme, props.color) }),
    ...(props.bg && { backgroundColor: getColor(props.theme, props.bg) }),
  }),
  space,
  width,
  fontSize,
  flex,
  order,
  alignSelf,
)

Box.defaultProps = {
  as: "div",
}

export type BoxProps = Props
export default Box
