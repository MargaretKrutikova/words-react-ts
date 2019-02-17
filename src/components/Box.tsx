import {
  alignSelf,
  AlignSelfProps,
  flex,
  FlexProps,
  fontSize,
  FontSizeProps,
  order,
  OrderProps,
  space,
  SpaceProps,
  width,
  WidthProps,
} from "styled-system"
import styled, { AsProps, ColorProps, omitProps } from "../theme"

type Props = WidthProps &
  SpaceProps &
  FontSizeProps &
  FlexProps &
  OrderProps &
  AlignSelfProps &
  AsProps & {
    color?: ColorProps
    bg?: ColorProps,
  }

const Box = styled("div", omitProps<Props>("width", "color"))<Props>(
  (props) => ({
    boxSizing: "border-box",
    color: props.color && props.theme.colors[props.color],
    backgroundColor: props.bg && props.theme.colors[props.bg],
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
