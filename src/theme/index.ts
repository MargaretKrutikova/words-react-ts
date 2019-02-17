import isPropValid from "@emotion/is-prop-valid"
import styled, { CreateStyled } from "@emotion/styled"
import { StyledOptions } from "@emotion/styled"

import { Breakpoints, breakpoints } from "./media"
import { spacingPx, SpacingPx } from "./spacing"
import {
  defaultFont,
  typographyVariants,
  TypographyVariants,
  Variant,
} from "./typography"

export type AsProps = {
  as?: keyof JSX.IntrinsicElements | React.ReactType,
}

export const omitProps = <Props>(
  ...omit: Array<Extract<keyof Props, string>>
): Partial<StyledOptions> => ({
  shouldForwardProp: (prop) => isPropValid(prop) && omit.indexOf(prop as any) < 0,
})

type Colors = {
  primaryBg: string
  primaryText: string
  purple: string
  lightText: string,
}
export type ColorProps = keyof Colors

export type Theme = {
  space: SpacingPx
  breakpoints: Breakpoints
  typography: {
    variants: TypographyVariants
    fontFamily: string
    fontWeight: number,
  }
  colors: Colors
  maxWidth: number,
}

export const theme: Theme = {
  space: spacingPx,
  breakpoints,
  colors: {
    primaryBg: "#fff",
    primaryText: "#4A4A4A",
    purple: "#661B3F",
    lightText: "#fefefe",
  },
  typography: {
    variants: typographyVariants,
    ...defaultFont,
  },
  maxWidth: 1200,
}

export type Variant = Variant
export default styled as CreateStyled<Theme>
