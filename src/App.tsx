import { css, Global } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import * as React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Box from "./components/Box"
import Header from "./components/Header"
import WordsList from "./components/WordsList"
import { theme, Theme } from "./theme"

const globalStyles = (th: Theme) =>
  css({
    body: {
      margin: 0,
      fontFamily: th.fontFamily,
    },
  })

const App: React.FunctionComponent<{}> = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Global styles={globalStyles(theme)} />
        <Header />
        <Box width={{ xs: 1, sm: 2 / 3 }} px={{ xs: 4, md: 6 }}>
          <Switch>
            <Route exact={true} path="/" component={WordsList} />
          </Switch>
        </Box>
      </React.Fragment>
    </ThemeProvider>
  </Router>
)

export default App
