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
import {
  convertSpacing,
  convertWidth,
  ThemeSpaceProps,
} from "../theme/styled-system"

type Props = WidthProps &
  ThemeSpaceProps &
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
    ...space(convertSpacing(props.theme, props)),
    ...width(convertWidth(props.theme, props)),
  }),
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
