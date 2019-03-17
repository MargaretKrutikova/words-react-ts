/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as ReactDOM from "react-dom"
import App from "./components/App"
import registerServiceWorker from "./registerServiceWorker"

import "./fonts/fonts.css"

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement)
registerServiceWorker()
