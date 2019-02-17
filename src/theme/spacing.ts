export type SpacingPx = {
  xxsmall: number
  xsmall: number
  small: number
  smedium: number
  medium: number
  large: number
  xlarge: number
  xxlarge: number,
}

const spacingUnit = 6

export const spacingPx: SpacingPx = {
  xxsmall: spacingUnit / 2,
  xsmall: spacingUnit,
  small: spacingUnit * 2,
  smedium: spacingUnit * 3,
  medium: spacingUnit * 4,
  large: spacingUnit * 6,
  xlarge: spacingUnit * 8,
  xxlarge: spacingUnit * 10,
}
