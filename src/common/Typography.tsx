import {
  fontSize as fontSizeStyled,
  FontSizeProps,
  fontStyle,
  FontStyleProps,
  fontWeight,
  FontWeightProps,
  lineHeight,
  LineHeightProps,
  SpaceProps,
  textAlign,
  TextAlignProps,
} from "styled-system"
import styled, { AsProps, omitProps, Variant } from "../theme"
import media from "../theme/media"
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

const Typography = styled(Box, omitProps<Props>("fontSize"))<Props>(
  ({ variant, theme: { typography } }) => ({
    display: "block",
    [media.up("sm")]: {
      ...(variant && typography.variants[variant]),
    },
    [media.up("md")]: {
      ...(variant && typography.variants[variant]),
    },
    [media.up("lg")]: {
      ...(variant && typography.variants[variant]),
    },
  }),
  textAlign,
  fontSizeStyled,
  fontWeight,
  fontStyle,
  lineHeight,
)

Typography.defaultProps = {
  as: "span",
  variant: "body1",
}

export default Typography
