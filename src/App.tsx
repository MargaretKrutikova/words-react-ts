import { css, Global } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import * as React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Container from "./components/Container"
import Header from "./components/Header"
import WordsList from "./components/WordsList"
import { theme, Theme } from "./theme"

const globalStyles = (th: Theme) =>
  css({
    body: {
      margin: 0,
      backgroundColor: th.colors.siteBg,
      ...th.typography.variants.body1,
    },
  })

const App: React.FunctionComponent<{}> = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Global styles={globalStyles(theme)} />

        <Header />

        <Container as="main">
          <Switch>
            <Route exact={true} path="/" component={WordsList} />
          </Switch>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  </Router>
)

export default App
