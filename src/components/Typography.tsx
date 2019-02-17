/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/core"
import {
  fontSize,
  FontSizeProps,
  lineHeight,
  LineHeightProps,
  textAlign,
  TextAlignProps,
} from "styled-system"
import styled, { AsProps } from "../theme"
import Box, { BoxProps } from "./Box"

type Props = AsProps &
  BoxProps &
  LineHeightProps &
  TextAlignProps &
  FontSizeProps & {
    variant?: Variant,
  }

type Variant = "h1" | "h2" | "h3" | "h4" | "body1" | "body2"

const variantCss: { [k in Variant]: SerializedStyles } = {
  h1: css({
    fontSize: "2em",
  }),
  h2: css({
    fontSize: "1.5em",
  }),
  h3: css({
    fontSize: "1.17em",
  }),
  h4: css({
    fontSize: "1.33em",
  }),
  body1: css({
    fontSize: "1em",
  }),
  body2: css({
    fontSize: "0.8em",
  }),
}

const Typography = styled(Box)<Props>(
  (props) => ({
    ...(props.variant && variantCss[props.variant]),
  }),
  textAlign,
  lineHeight,
  fontSize,
)

Typography.defaultProps = {
  as: "span",
  variant: "body1",
}

export default Typography
