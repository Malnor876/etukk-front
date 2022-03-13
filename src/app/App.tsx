import "app/assets/scss/base.scss"

import ClientAPI from "api/client"
import { ModalContainer } from "modules/modal/container"
import { ReactNode, Suspense } from "react"
import { ClientContextProvider } from "react-fetching-library"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import store from "redux/store"

import AppRouter from "./AppRouter"
import ErrorBoundary from "./components/services/ErrorBoundary/ErrorBoundary"
import Footer from "./components/static/Footer/Footer"
import Header from "./components/static/Header/Header"
import Main from "./components/static/Main/Main"

function App() {
  return (
    <AppProviders>
      <Suspense fallback="Loading...">
        <ErrorBoundary fallback="Error">
          <Header />
          <Main>
            <AppRouter />
          </Main>
          <Footer />

          <ModalContainer />
          <ToastContainer />
        </ErrorBoundary>
      </Suspense>
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

export default App
