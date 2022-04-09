import "app/assets/scss/base.scss"

import { cacheProvider } from "infrastructure/persistence/api/cache"
import ClientAPI from "infrastructure/persistence/api/client"
import store from "infrastructure/persistence/redux/store"
import { ModalContainer } from "modules/modal/container"
import { ReactNode, Suspense, useEffect } from "react"
import { ClientContextProvider } from "react-fetching-library"
import { Provider, useSelector } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import AppRouter from "./AppRouter"
import CookiesNotice from "./components/containers/CookiesNotice/CookiesNotice"
import ErrorBoundary from "./components/containers/ErrorBoundary/ErrorBoundary"
import ErrorFallback from "./views/error/ErrorFallback"

function App() {
  return (
    <AppProviders>
      <Suspense fallback="Loading...">
        <ErrorBoundary fallback={ErrorFallback}>
          <AppRouter />
          <CookiesNotice />
          <ModalContainer />
          <ToastContainer />
        </ErrorBoundary>
      </Suspense>
      <AppEffects />
    </AppProviders>
  )
}

function AppProviders(props: { children: ReactNode }) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ClientContextProvider client={ClientAPI}>
          {props.children}
        </ClientContextProvider>
      </Provider>
    </BrowserRouter>
  )
}

function AppEffects() {
  const user = useSelector(state => state.user)
  useEffect(() => {
    // Clearing API cache to ensure a new user data be loaded
    cacheProvider.setItems({})
  }, [user])
  return null
}

export default App
