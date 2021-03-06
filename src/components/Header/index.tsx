/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { Moon as MoonIcon, Sun as SunIcon } from "react-feather"

import useThemeDispatch from "../../hooks/useThemeDispatch"
import { themeActions } from "../../hooks/useThemeMode"
import styled, { ThemeMode } from "../../theme"

import Container from "../../common/Container"
import InnerContainer from "../../common/InnerContainer"
import { RouterLink } from "../../common/Link"
import SvgIcon from "../../common/SvgIcon"
import Typography from "../../common/Typography"
import Navigation from "./Navigation"
import ThemeSwitch, { SwitchButton } from "./ThemeSwitch"

type Props = {
  themeMode: ThemeMode,
}

const HeaderContainer = styled(Container)(({ theme: { colors } }) => ({
  color: colors.primaryContrastText,
  backgroundColor: colors.primary,
}))

const Header: React.FunctionComponent<Props> = ({ themeMode }) => {
  const dispatch = useThemeDispatch()
  const setDark = React.useCallback(
    () => dispatch && dispatch(themeActions.setDark()),
    [],
  )
  const setLight = React.useCallback(
    () => dispatch && dispatch(themeActions.setLight()),
    [],
  )

  return (
    <HeaderContainer>
      <InnerContainer
        py={{ xs: "xxsmall", md: "xsmall" }}
        as="header"
        alignItems="baseline"
        justifyContent={{ xs: "space-between", sm: "flex-start" }}
      >
        <Typography as="h1" mr={{ xs: "small", md: "large" }} variant="h2">
          <RouterLink to="/">Words</RouterLink>
        </Typography>

        <Navigation />

        <ThemeSwitch mode={themeMode}>
          <SwitchButton onClick={setDark} isActive={themeMode === "dark"}>
            <SvgIcon icon={MoonIcon} />
          </SwitchButton>
          <SwitchButton onClick={setLight} isActive={themeMode === "light"}>
            <SvgIcon icon={SunIcon} />
          </SwitchButton>
        </ThemeSwitch>
      </InnerContainer>
    </HeaderContainer>
  )
}

export default Header
