import { css, Global } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import * as React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { makeStore, StoreContext } from "../../redux"
import { Theme } from "../../theme"
import { ThemeDispatchProvider } from "../hooks/useThemeDispatch"
import useThemeMode from "../hooks/useThemeMode"

import Container from "../Container"
import Header from "../Header"
import WordsList from "../WordList"

const globalStyles = (th: Theme) =>
  css({
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: th.colors.background1,
      color: th.colors.text1,
      ...th.typography.variants.body1,
    },
  })

const store = makeStore()

const App: React.FunctionComponent<{}> = () => {
  const [theme, dispatch] = useThemeMode()

  return (
    <ThemeDispatchProvider value={dispatch}>
      <ThemeProvider theme={theme}>
        <StoreContext.Provider value={store}>
          <Router>
            <React.Fragment>
              <Global styles={globalStyles(theme)} />

              <Header themeMode={theme.mode} />

              <Container as="main">
                <Switch>
                  <Route exact={true} path="/" component={WordsList} />
                </Switch>
              </Container>
            </React.Fragment>
          </Router>
        </StoreContext.Provider>
      </ThemeProvider>
    </ThemeDispatchProvider>
  )
}

export default App
