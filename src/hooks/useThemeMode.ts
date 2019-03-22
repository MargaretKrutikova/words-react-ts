import * as React from "react"
import { ActionType, createStandardAction, getType } from "typesafe-actions"

import { createTheme, Theme, ThemeMode } from "../theme"

export type ThemeModeDispatch = React.Dispatch<ThemeModeAction>

const setLight = createStandardAction("theme/SET_LIGHT")()
const setDark = createStandardAction("theme/SET_DARK")()
type ThemeModeAction = ActionType<typeof setLight | typeof setDark>

const themeModeReducer: React.Reducer<ThemeMode, ThemeModeAction> = (
  mode: ThemeMode,
  action: ThemeModeAction,
) => {
  switch (action.type) {
    case getType(setLight):
      return "light"
    case getType(setDark):
      return "dark"
    default:
      return mode
  }
}

const lightTheme = createTheme("light")
const darkTheme = createTheme("dark")

const useThemeMode = (): [Theme, ThemeModeDispatch] => {
  const [mode, dispatch] = React.useReducer(themeModeReducer, "light")

  const theme = mode === "dark" ? darkTheme : lightTheme
  return [theme, dispatch]
}

export const themeActions = { setDark, setLight }
export default useThemeMode
