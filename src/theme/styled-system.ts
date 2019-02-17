import { px, ResponsiveValue, SpaceProps, WidthProps } from "styled-system"
import { Theme } from "."
import { SpacingPx } from "./spacing"

type ThemeMap = { [k: string]: any }

type ValueConverter = (value: any) => any
const identity = (value: any) => value

const getValueFromThemeMap = (
  map: ThemeMap,
  value: any,
  convert: ValueConverter = identity,
) => (Object.keys(map).indexOf(value) > -1 ? convert(map[value]) : value)

const getResponsiveValueFromThemeMap = (
  themeMap: ThemeMap,
  value: ResponsiveValue<any>,
  convert: ValueConverter = identity,
) =>
  typeof value === "object"
    ? Object.keys(value).reduce(
        (acc, key) => ({
          ...acc,
          [key]: getValueFromThemeMap(themeMap, value[key], convert),
        }),
        {},
      )
    : Array.isArray(value)
    ? value.map((val) => getValueFromThemeMap(themeMap, val, convert))
    : getValueFromThemeMap(themeMap, value, convert)

const convertKeys = (
  themeMap: ThemeMap,
  keys: string[],
  convert: ValueConverter = identity,
  values: any,
): SpaceProps & WidthProps =>
  Object.keys(values).reduce((acc, key) => {
    const hasKey = keys.indexOf(key as any) > -1
    const value = hasKey
      ? getResponsiveValueFromThemeMap(themeMap, values[key], convert)
      : values[key]
    return { ...acc, [key]: value }
  }, {})

// prettier-ignore
// tslint:disable-next-line: max-line-length
const spacingKeys: Array<keyof SpaceProps> = [ "m", "mt", "mr", "mb", "ml", "mx", "my", "p", "pt", "pr", "pb", "pl", "px", "py" ]

const widthKeys: Array<keyof SpaceProps | keyof WidthProps> = ["width"]

export const convertSpacing = (theme: Theme, values: SpaceProps): SpaceProps =>
  convertKeys(theme.space, spacingKeys, px, values)

export const convertWidth = (theme: Theme, values: WidthProps): WidthProps =>
  convertKeys(theme.space, widthKeys, px, values)

export type ThemeSpaceProps = {
  [K in keyof SpaceProps]: ResponsiveValue<keyof SpacingPx | number>
}
