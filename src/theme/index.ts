import isPropValid from "@emotion/is-prop-valid"
import styled, { CreateStyled, StyledOptions } from "@emotion/styled"
import { StyledSpaceProps, StyledWidthProps } from "styled-system-mapper"

import { Colors, createDarkPalette, createLightPalette } from "./colors"
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

export type ColorProps = keyof Colors

export type Theme = {
  borderRadius: number
  space: SpacingPx
  breakpoints: Breakpoints
  typography: {
    variants: TypographyVariants
    defaultFont: {
      fontFamily: string
      fontWeight: number,
    },
  }
  colors: Colors
  maxWidth: number,
}

export const createTheme = (isDark: boolean): Theme => ({
  borderRadius: 3,
  space: spacingPx,
  breakpoints,
  colors: isDark ? createDarkPalette() : createLightPalette(),
  typography: {
    variants: typographyVariants,
    defaultFont,
  },
  maxWidth: 1200,
})

export const transitions = ["0.15s all ease"]

export type SpaceProps = StyledSpaceProps<typeof spacingPx>
export type WidthProps = StyledWidthProps<typeof spacingPx>

export type Variant = Variant
export default styled as CreateStyled<Theme>
