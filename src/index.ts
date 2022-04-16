import App from "app/App"
import PreInit from "preinit"
import { createElement } from "react"
import { createRoot } from "react-dom/client"

require("polyfills")

function init() {
  const rootElement = document.getElementById("root")
  if (rootElement === null) return

  const root = createRoot(rootElement)
  root.render(createElement(App))
}

if (PreInit(false)) init()
