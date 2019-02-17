import { rem } from "polished"

export type Variant = "h1" | "h2" | "h3" | "h4" | "body1" | "body2"

type VariantParams = {
  fontFamily?: string
  fontSize: number
  lineHeight: number
  fontWeight?: number
  marginTop?: number
  marginBottom?: number,
}

const buildVariant = ({
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
  marginTop,
  marginBottom,
}: VariantParams) => ({
  fontFamily,
  fontWeight,
  fontSize: rem(fontSize),
  lineHeight: lineHeight / fontSize,
  marginTop: marginTop ? rem(marginTop) : 0,
  marginBottom: marginBottom ? rem(marginBottom) : 0,
})

type Fonts = {
  [key: string]: {
    fontFamily: string
    fontWeight: number,
  },
}

const fonts: Fonts = {
  jost: {
    fontFamily: "Jost",
    fontWeight: 400,
  },
}

export type TypographyVariants = { [k in Variant]: React.CSSProperties }

export const typographyVariants: TypographyVariants = {
  h1: buildVariant({
    ...fonts.jost,
    fontSize: 60,
    lineHeight: 60,
  }),
  h2: buildVariant({
    ...fonts.jost,
    fontSize: 45,
    lineHeight: 48,
  }),
  h3: buildVariant({
    ...fonts.jost,
    fontSize: 32,
    lineHeight: 40,
  }),
  h4: buildVariant({
    ...fonts.jost,
    fontSize: 24,
    lineHeight: 32,
  }),
  body1: buildVariant({
    ...fonts.jost,
    fontSize: 17,
    lineHeight: 28,
  }),
  body2: buildVariant({
    ...fonts.jost,
    fontSize: 15,
    lineHeight: 24,
  }),
}

export const defaultFont = fonts.jost
