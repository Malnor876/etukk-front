import * as Sentry from "@sentry/react"
import { BrowserTracing } from "@sentry/tracing"
import App from "app/App"
import ReduxStore from "infrastructure/persistence/redux/store"
import PreInit from "preinit"
import { createElement } from "react"
import { createRoot } from "react-dom/client"

require("polyfills")

interface HTTPData {
  method: "POST" | "GET"
  url: string
}

function defaultTransformSentryEvent(event: Sentry.Event): Sentry.Event {
  const reduxStoreState = ReduxStore.getState()
  const user = reduxStoreState.user.auth ? reduxStoreState.user : null
  return {
    ...event,
    platform: "typescript",
    user: {
      ...event.user,
      id: user?.id.toString(),
      username: user?.fullName.toString(),
    },
    tags: { project: "Etukk Frontend" }
  }
}

Sentry.init({
  dsn: "https://e2afe7daf1e34eff83163e251d64e8b1@o1249067.ingest.sentry.io/6409393",
  integrations: [new BrowserTracing()],
  maxBreadcrumbs: 50,
  allowUrls: [location.host, process.env.REACT_APP_API_HOST],
  initialScope: {
    tags: { project: "Etukk Frontend" }
  },
  beforeBreadcrumb(breadcrumb, hint?) {
    if (["log", "warning"].includes(breadcrumb.level || "")) {
      return null
    }

    return breadcrumb
  },
  beforeSend(event, hint?) {
    if (event.breadcrumbs != null) {
      const lastBreadcrumb = event.breadcrumbs[event.breadcrumbs.length - 1]
      if (lastBreadcrumb.category === "fetch") {
        const lastBreadcrumbData = lastBreadcrumb.data as HTTPData
        const lastBreadcrumbURL = new URL(lastBreadcrumbData.url)

        return defaultTransformSentryEvent({
          ...event,
          exception: {
            values: [{
              type: "API error",
              value: lastBreadcrumbURL.pathname
            }],
          }
        })
      }
    }

    return defaultTransformSentryEvent(event)
  },
  sendClientReports: true,

  // initialScope(scope) {

  // },

  environment: process.env.NODE_ENV,

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.01 : 1.00,
})

function init() {
  const rootElement = document.getElementById("root")
  if (rootElement === null) return

  const root = createRoot(rootElement)
  root.render(createElement(App))
}

if (PreInit(false)) init()
