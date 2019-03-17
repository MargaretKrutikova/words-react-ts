import { darken, invert, lighten } from "polished"

export const baseColors = {
  white: "#fff",
  blackOlive: "#393E41",
  whiteSmoke: "#F7F5F4",
  arsenic: "#3B3F47",
  timerwolf: "#dbd9d4",
}

export const createLightPalette = (): Colors => {
  const { blackOlive, whiteSmoke, white } = baseColors

  const background1 = whiteSmoke
  const background2 = white
  const border1 = lighten(0.15, blackOlive)
  const border2 = lighten(0.4, blackOlive)

  return {
    background1,
    text1: invert(background1),
    background2,
    primary: blackOlive,
    primaryContrastText: white,
    button: {
      primary: {
        bg: blackOlive,
        text: white,
        border: blackOlive,
        hover: darken(0.1, blackOlive),
      },
      secondary: {
        bg: darken(0.07, whiteSmoke),
        text: blackOlive,
        border: blackOlive,
        hover: darken(0.12, whiteSmoke),
      },
    },
    input: {
      bg: background2,
      border: border1,
      text: invert(background2),
    },
    border1,
    border2,
  }
}

export const createDarkPalette = (): Colors => {
  const { timerwolf, arsenic } = baseColors

  const background1 = darken(0.05, arsenic)
  const primary = timerwolf
  const background2 = lighten(0.1, background1)

  return {
    background1,
    text1: primary,
    background2,
    primary,
    primaryContrastText: invert(primary),
    button: {
      primary: {
        bg: primary,
        text: arsenic,
        border: primary,
        hover: darken(0.1, primary),
      },
      secondary: {
        bg: background2,
        text: primary,
        border: darken(0.1, primary),
        hover: lighten(0.15, background1),
      },
    },
    input: {
      bg: background2,
      border: darken(0.1, primary),
      text: invert(background2),
    },
    border1: darken(0.1, primary),
    border2: darken(0.2, primary),
  }
}

export type Colors = {
  background1: string
  background2: string
  primary: string
  primaryContrastText: string
  text1: string
  button: {
    primary: {
      bg: string
      border: string
      text: string
      hover: string,
    }
    secondary: {
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
  }
  border1: string
  border2: string,
}
