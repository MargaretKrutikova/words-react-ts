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
  width,
  WidthProps,
} from "styled-system"
import styled, { AsProps, ColorProps, omitProps, Theme } from "../theme"
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

const getColor = (theme: Theme, color: string) => (theme.colors as any)[color]

const Box = styled("div", omitProps<Props>("width", "color"))<Props>(
  (props) => ({
    boxSizing: "border-box",
    ...(props.color && { color: getColor(props.theme, props.color) }),
    ...(props.bg && { backgroundColor: getColor(props.theme, props.bg) }),
  }),
  (props) => ({ ...space(convertSpacing(props.theme, props)) }),
  (props) => ({ ...width(convertWidth(props.theme, props)) }),
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
