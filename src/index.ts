import App from "app/App"
import { createElement } from "react"
import ReactDOM from "react-dom"

import("polyfills")
import("preload")

ReactDOM.render(createElement(App), document.getElementById("root"))
