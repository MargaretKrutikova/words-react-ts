import isPropValid from "@emotion/is-prop-valid"
import styled, { CreateStyled } from "@emotion/styled"
import { StyledOptions } from "@emotion/styled"

import {
  defaultFont,
  typographyVariants,
  TypographyVariants,
  Variant,
} from "./typography"

export type AsProps = {
  as?: keyof JSX.IntrinsicElements,
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
  breakpoints: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string,
  }
  typography: {
    variants: TypographyVariants
    fontFamily: string
    fontWeight: number,
  }
  colors: Colors
  maxWidth: number,
}

export const theme: Theme = {
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
  breakpoints: {
    xs: "0px",
    sm: "600px",
    md: "960px",
    lg: "1024px",
    xl: "1200px",
  },
}

export type Variant = Variant
export default styled as CreateStyled<Theme>
