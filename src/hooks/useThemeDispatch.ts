import * as React from "react"
import { ThemeModeDispatch } from "./useThemeMode"

const ThemeDispatchContext = React.createContext<ThemeModeDispatch | null>(null)
export const ThemeDispatchProvider = ThemeDispatchContext.Provider

const useThemeDispatch = () => React.useContext(ThemeDispatchContext)

export default useThemeDispatch
