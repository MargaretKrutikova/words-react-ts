import { css, Global } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import * as React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { makeStore, StoreContext } from "./state"
import { theme, Theme } from "./theme"

import Container from "./components/Container"
import Header from "./components/Header"
import WordsList from "./components/WordList"

const globalStyles = (th: Theme) =>
  css({
    body: {
      margin: 0,
      backgroundColor: th.colors.siteBg,
      ...th.typography.variants.body1,
    },
  })

const store = makeStore()

const App: React.FunctionComponent<{}> = () => (
  <ThemeProvider theme={theme}>
    <StoreContext.Provider value={store}>
      <Router>
        <React.Fragment>
          <Global styles={globalStyles(theme)} />

          <Header />

          <Container as="main">
            <Switch>
              <Route exact={true} path="/" component={WordsList} />
            </Switch>
          </Container>
        </React.Fragment>
      </Router>
    </StoreContext.Provider>
  </ThemeProvider>
)

export default App
