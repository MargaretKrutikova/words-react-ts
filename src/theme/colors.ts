export const baseColors = {
  blackOlive: {
    darker: "#2B2C31",
    primary: "#393E41",
    lighter1: "#53595A",
    lighter2: "#6E7474",
    lighter3: "#888D8C",
    lighter4: "#A2A7A5",
    lighter5: "#BDC0BE",
    lighter6: "#D7D9D8",
  },
  verdigris: {
    primary: "#44BBA4",
  },
  whiteSmoke: "#F7F5F4",
}

export const themeColors: Colors = {
  siteBg: baseColors.whiteSmoke,
  primaryText: "#000",
  secondaryText: "#111",
  primary: baseColors.blackOlive.primary,
  primaryContrastText: "#fff",
  secondary: baseColors.verdigris.primary,
  secondaryContrastText: "#000",
  button: {
    primary: {
      bg: baseColors.blackOlive.primary,
      text: "#fff",
      border: baseColors.blackOlive.primary,
      hover: baseColors.blackOlive.darker,
    },
    secondary: {
      bg: baseColors.blackOlive.primary,
      text: "#fff",
      border: baseColors.blackOlive.primary,
      hover: baseColors.blackOlive.lighter1,
    },
  },
  input: {
    bg: "#fff",
    border: baseColors.blackOlive.lighter2,
    text: "#000",
  },
}

export type Colors = {
  primary: string
  primaryContrastText: string
  secondary: string
  secondaryContrastText: string
  primaryText: string
  secondaryText: string
  siteBg: string
  button: {
    primary: {
      bg: string
      border: string
      text: string
      hover: string,
    }
    secondary?: {
      bg: string
      border: string
      text: string
      hover: string,
    },
  }
  input: {
    bg: string
    border: string
    text: string,
  },
}
