import {
  fontSize as fontSizeStyled,
  FontSizeProps,
  fontStyle,
  FontStyleProps,
  fontWeight,
  FontWeightProps,
  LineHeightProps,
  SpaceProps,
  textAlign,
  TextAlignProps,
} from "styled-system"
import styled, { AsProps, Variant } from "../theme"
import Box, { BoxProps } from "./Box"

type Props = AsProps &
  BoxProps &
  LineHeightProps &
  TextAlignProps &
  SpaceProps &
  FontSizeProps &
  FontWeightProps &
  FontStyleProps & {
    variant?: Variant,
  }

const Typography = styled(Box)<Props>(
  (props) => ({
    ...(props.variant && props.theme.typography.variants[props.variant]),
    display: "block",
    margin: 0,
  }),
  textAlign,
  fontSizeStyled,
  fontWeight,
  fontStyle,
)

Typography.defaultProps = {
  as: "span",
  variant: "body1",
}

export default Typography
