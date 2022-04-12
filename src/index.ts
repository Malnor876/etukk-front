import App from "app/App"
import { createElement } from "react"
import { createRoot } from "react-dom/client"

require("polyfills")
require("preload")

function init() {
  const rootElement = document.getElementById("root")
  if (rootElement === null) return

  const root = createRoot(rootElement)
  root.render(createElement(App))
}

init()